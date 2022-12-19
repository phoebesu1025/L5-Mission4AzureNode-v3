
const riskRating = require('./riskRating')

const testCases = [
    {
        scenario: " 3 keywords match",
        input: { "input": "My only claim was a crash into my house's garage door that left a scratch on my car. There are no other crashes." },
        expected: 3
    },
    {
        scenario: "0 keywords match",
        input: { "input": "I have no claim" },
        expected: 4
    },

    {
        scenario: "6 keywords match",
        input: { "input": "I bumped and smashed into the tree, and got a lot of scratches, crashes. At the back, there are more scratches and crashes" },
        expected: 5
    }
]


describe('riskRating', () => {

    testCases.map(ts => {
        it(ts.scenario, () => {
            const actual = riskRating(ts.input)
            expect(actual).toBe(ts.expected)

        })
    })
})
