function riskRating() {
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
    })
}
module.exports = riskRating;