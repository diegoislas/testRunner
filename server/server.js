const express = require('express')
const app = express()
const path = require("path")

const { MongoClient } = require("mongodb")

const uri = "mongodb+srv://team6:qziI2pApuyEEkTFG@projectcluster.lrqotts.mongodb.net/?retryWrites=true&w=majority"
const client = new MongoClient(uri)

async function getName() {
    try {
        await client.connect()
        const result = await client.db("testdb").collection("testUsers").findOne({user:"Justin"})
        console.log(result)
        return result
    } catch (err) {
        console.log(err)
    }
}

app.use(express.static(path.join(__dirname, "client/build")))

app.get("/app", (req, res) => {
    res.json(getName())
})

app.listen(9000, () => { console.log("Listening on port 9000") })