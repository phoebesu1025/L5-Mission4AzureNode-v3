
const { riskRating } = require('./riskRating.js')

describe('risk rating claim', () => {

    it("plain input", () => {
        const Input = "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes.";
        const result1 = riskRating(Input);
        expect(result1).toBe(3)
    })





})
