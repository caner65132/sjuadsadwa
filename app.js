import { ActivityType, Collection } from "discord.js"
import { Client, Collection } from "discord.js"
import 'dotenv/config'

const client = new Client({
    intents: ["Guilds"],
    presence: {status: "dnd", activities: [{name: "VALORANT", type: "PLAYING" }]}
})
client.on("ready",() => {
    console.log("Bir Başarı Doğcakmı ? bot hazır")

    const collection = new Collection()
    collection.set("a", 1)
    collection.set("b", 2)

    console.log(collection)
}) 


client.login(process.env.token)