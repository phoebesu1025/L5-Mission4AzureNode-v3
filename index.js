const express = require('express')
const app = express()
const cors = require('cors')
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions))
// const riskRating = require('./riskRating')
app.use(express.json());

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log("listening to PORT", PORT);
});

const regexKeyWords = /collide(s|d)?|crash(es)?|scratch(es|ed)?|bump(ed)?|smash(es|ed)?/gi;
let claimHistory = '{}'
let risk = 0;


app.post("/risk/claim", (req, res) => {
    let stringifyClaim = JSON.stringify(req.body)
    newClaimHistory = { ...req.body }
    let matchedKW = stringifyClaim.match(regexKeyWords);
    let value = matchedKW ? matchedKW : '';
    let risk = value.length

    if (risk == 0) {
        risk = 1
    } else if (risk > 5) {
        risk = 5
    }

    console.log(`risk rating: ${risk}`)
    res.send(` ${risk}`)
})



app.get("/risk/claim", (req, res) => {
    console.log(newClaimHistory)
    res.json(newClaimHistory)
})


app.get("/", (req, res) => res.json({ message: 'Welcome to Turners API Page!' }))
app.get("/risk", (req, res) => res.json({ message: 'Welcome to Risk Rating API!' }))