const express = require('express')
const app = express()
const path = require("path")

app.use(express.static(path.join(__dirname, "client/build")))

app.get("/app", (req,res) => {
    res.json({"user": "johnny"})
})

app.listen(9000, () => {console.log("Listening on port 9000")})