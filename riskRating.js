function riskRating(input) {
    const regexKeyWords = /collide(s|d)?|crash(es)?|scratch(es|ed)?|bump(ed)?|smash(es|ed)?/gi;

    let stringifyClaim = JSON.stringify(input)

    let matchedKW = stringifyClaim.match(regexKeyWords);
    let value = matchedKW ? matchedKW : '';
    let risk = value.length

    if (risk == 0) {
        risk = 1
    } else if (risk > 5) {
        risk = 5
    }
    return risk
}
module.exports = riskRating;