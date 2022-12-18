const express = require('express')
const app = express()
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("listening to PORT", PORT);
});
const { riskRating } = require('./riskRatingTest.js')

app.get("/", (req, res) => res.json({ message: 'Welcome to Turners API Page!' }))
app.get("/risk", (req, res) => res.json({ message: 'Welcome to Risk Rating API!' }))
app.get("/fifa", (req, res) => {
    res.send("Welcome to FIFA World Cup API!")
})


app.post("/risk/claim", (req, res) => {
    console.log(JSON.stringify(riskRating(req.body.input)));
    res.send(JSON.stringify(riskRating(req.body.input)));
})