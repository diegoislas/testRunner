const express = require('express')
const app = express()

app.get("/app", (req,res) => {
    res.json({"user": "johnny"})
})

app.listen(9000, () => {console.log("Listening on port 9000")})