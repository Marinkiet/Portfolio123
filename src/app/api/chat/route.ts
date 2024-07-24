import { ChatOpenAI } from "@langchain/openai";
import { LangChainStream, OpenAIStream, StreamingTextResponse, Message as VercelChatMessage } from "ai";
// import { ChatCompletionMessageParam } from "ai/prompts";
import { ChatPromptTemplate, PromptTemplate, MessagesPlaceholder } from "@langchain/core/prompts";
import OpenAI from "openai"
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { getVectorStore } from "@/lib/astradb";
import { createRetrievalChain } from "langchain/chains/retrieval";
import { AIMessage, HumanMessage } from "@langchain/core/messages";
import { createHistoryAwareRetriever } from "langchain/chains/history_aware_retriever";
import { Redis } from "@upstash/redis";
import { UpstashRedisCache } from "langchain/cache/upstash_redis";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const messages = body.messages;

        //create history
        const chatHistory = messages.slice(0, -1)
            .map((m: VercelChatMessage) =>
                m.role === "user" ? new HumanMessage(m.content) :
                    new AIMessage(m.content),
            )
        const currentMessageContent = messages[messages.length - 1].content;
        // const openai = new OpenAI(); close open ai client

        const cache = new UpstashRedisCache({
            client: Redis.fromEnv(),
        })

        //Destructure streams
        const { stream, handlers } = LangChainStream();

        //Create langchain class
        const chatModel = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            streaming: true,
            callbacks: [handlers],
            verbose: true,
            cache
        })

        const rephrasingModel = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            verbose: true,
            cache
        })

        //retrieve from users input

        const retriever = ((await getVectorStore()).asRetriever());

        const rephrasePrompt = ChatPromptTemplate.fromMessages([
            new MessagesPlaceholder("chat_history"),
            [
                "user", "{input}"
            ],
            [
                "user", "Given the above conversation, generate a search query to lookup in order to get information relevant to the current question. " +
                "Don't leave out any relevant keywords. Only return the query an no other text."
            ]
        ])

        const historyAwareRetrieverChain = await createHistoryAwareRetriever({
            llm: rephrasingModel,
            retriever,
            rephrasePrompt

        })

        const prompt = ChatPromptTemplate.fromMessages([
            [
                "system",
                "You are a chatbot named Marinkie. You impersonate Marinkie the owner of the website" +
                "Answer the users questions based on the below context as the owner." +
                "Whenever it makes sense, provide links to the pages that contain more information about the topic from the given context" +
                "Format your messages in markdown format.\n\n" +
                "Context:\n{context}"
            ],
            new MessagesPlaceholder("chat_history"),
            [
                "user", "{input}"
            ]
        ])
        // const chain = propmt.pipe(chatModel);

        const combineDocsChain = await createStuffDocumentsChain({
            llm: chatModel,
            prompt,
            documentPrompt: PromptTemplate.fromTemplate(
                "Page URL: {url}\n\nPage content:\n{page_content}" //get url to page
            ),
            documentSeparator: "\n----------\n"
        })

        const retrieverChain = await createRetrievalChain({
            combineDocsChain,
            retriever: historyAwareRetrieverChain //fetch doc basedon history
        })
        retrieverChain.invoke({
            input: currentMessageContent, //last message from user
            chat_history: chatHistory//autocomplettion
        })
        // const systemMessage:ChatCompletionMessageParam = {
        //     role:"system",
        //     content:"You are a bot named Marinkie"
        // }

        // const response = await openai.chat.completions.create({
        //     model:"gpt-3.5-turbo",
        //     stream:true,
        //     messages:[systemMessage,...messages]
        // })

        // const stream = OpenAIStream(response);
        return new StreamingTextResponse(stream);

    } catch (error) {
        console.log(error)
        return Response.json({ error: "Internal server error" }, { status: 500 })
    }

}