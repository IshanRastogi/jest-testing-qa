const giveMePromise = require('./index')

// 1. good old then block
describe("giveMePromise", () => {
    it("resolves with the correct value", done => {
        giveMePromise().then(res => expect(res).toBe("I am done"))
    })
})

test("resolves with the correct value", async () => {
    let result = await giveMePromise()
    expect(result).toBe("I am done")
})
