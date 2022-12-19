
const riskRating = require('./riskRating')

const testCases = [
    {
        scenario: "when 1 and 1 return 2",
        input: [1, 1],
        expected: 2
    }
]


describe('sum 1,1', () => {

    testCases.map(ts => {
        it(ts.scenario, () => {
            const actual = sum(ts.input)
            expect(actual).toBe(ts.expected)

        })
    })
})
