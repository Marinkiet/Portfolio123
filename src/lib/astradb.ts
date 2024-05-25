import { AstraDB } from "@datastax/astra-db-ts";
import { AstraDBVectorStore } from "@langchain/community/vectorstores/astradb";
import { OpenAIEmbeddings } from "@langchain/openai";

const endpoint = process.env.ASTRA_DB_ENDPOINT || "";
const token = process.env.ASTRA_DB_APPLICATION_TOKEN || "";
const collection = process.env.ASTRA_DB_COLLECTION || "";//If all empty

if (!token || !endpoint || !collection) {
    throw new Error(
        "Please ensure that your ASTRA_DB_ENDPOINT, ASTRA_DB_APPLICATION_TOKEN  and ASTRA_DB_COLLECTION environment variables are set up correctly"
    )
}


export async function getVectorStore() {
    return AstraDBVectorStore.fromExistingIndex(
      new OpenAIEmbeddings({ modelName: "text-embedding-3-small" }),
      {
        token,
        endpoint,
        collection,
        collectionOptions: {
          vector: {
            dimension: 1536,
            metric: "cosine",
          },
        },
      },
    );
  }

//use native astra db to delete all collections


export async function generateEmbeddingCollection() {
    return new AstraDB(token, endpoint).collection(collection)
}