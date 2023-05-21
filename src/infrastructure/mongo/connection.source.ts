import * as mongoose from "mongoose"
import assert from "assert";

export async function initMongo() {
    const host = assert(process.env.MONGO_HOST)
    const port = assert(process.env.MONGO_PORT)
    const username = assert(process.env.MONGO_USERNAME)
    const password = assert(process.env.MONGO_PASSWORD)

    return await connectMongo(host, port, username, password)
}


async function connectMongo(host, port, username, password) {
    await mongoose.connect(`mongodb://${host}:${port}/`);
}