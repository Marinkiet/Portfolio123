//Always at top for env variables
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" })
//
import { DirectoryLoader } from "langchain/document_loaders/fs/directory";
import { TextLoader } from "langchain/document_loaders/fs/text";
import { DocumentInterface } from "@langchain/core/documents";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { generateEmbeddingCollection, getVectorStore } from "../src/lib/astradb";
import { Redis } from "@upstash/redis";

async function generateEmbeddings() {
    const vectorStore = await getVectorStore();
    await Redis.fromEnv().flushdb();

    //enable deleting all documents in collection ...it's cheap even for 10k's text watch models to break down
    (await generateEmbeddingCollection()).deleteMany({});

    const loader = new DirectoryLoader(
        "src/app",
        {
            ".tsx": (path) => new TextLoader(path)
        },
        true //for nested routes
    )

    //for the actual page loading

    const docs = (await (loader.load()) //load the files
    )//load the files
        .filter(doc => doc.metadata.source.endsWith("page.tsx"))
        .map((doc): DocumentInterface => {
            const url = doc.metadata.source
                .replace(/\\/g, "/")
                .split("/src/app")[1]
                .split("/page.")[0] || "/" //" //also for js and ts file and home... thus e.g /social

            //for each doc remove the classes for styles 
            const pageContentTrimmed = doc.pageContent
                .replace(/^import.*$/gm, "")//remove all import statemets
                .replace(/ className=(["']).*?\1| className={.*?}/g, "") //remove all classname props
                .replace(/^\s*[\r]/gm, "")//remove all empty line
                .trim();
            return {
                pageContent: pageContentTrimmed,
                metadata: { url }
            }

        })

    //split the pages 
    const splitter = RecursiveCharacterTextSplitter.fromLanguage("html")
    const splitDocs = await splitter.splitDocuments(docs);

    // console.log(splitDocs);
    await vectorStore.addDocuments(splitDocs)


}


generateEmbeddings();