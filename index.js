const express = require('express')
const app = express()

const port = process.env.PORT || 8000;
app.listen(port);

app.get("/", (req, res) => res.json({ message: 'Hello World' }))



app.get("/fifa", (req, res) => {
    res.send("Welcome to FIFA World Cup API!")
})

let teams = [{ "name": "Netherlands", "group": "A" }, { "name": "England", "group": "B" }, { "name": "Qatar", "group": "A" }, { "name": "Ecuador", "group": "A" }]
app.get("/fifa/teams", (req, res) => {
    res.send(teams)
})