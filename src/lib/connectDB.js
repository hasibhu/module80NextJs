import { MongoClient, ServerApiVersion } from "mongodb";

let db;

export const connectDB = async () => {
    if (db) return db;
    const uri = process.env.NEXT_PUBLIC_DB_URL;

    try {
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        })

        db = client.db("next-hero");
        return db;
    } catch (error) {
        console.log(error);
    }
}