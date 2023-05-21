import * as mongoose from "mongoose"
import assert from "assert";

export async function initMongo() {
    const host = process.env.MONGO_HOST
    const port = process.env.MONGO_PORT
    const username = process.env.MONGO_USERNAME
    const password = process.env.MONGO_PASSWORD

    return await connectMongo(host, port, username, password)
}


async function connectMongo(host, port, username, password) {
    await mongoose.connect(`mongodb://${username}:${password}${host}:${port}/`)
        .catch(() => {
        throw new Error("Can not connect to mongo.")
    })
        .then(() => {
            console.log('Connected to mongo.')
        }
    )

}