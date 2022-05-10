const giveMePromise = jest.fn(() => Promise.resolve("I am done without delay"))

describe("giveMePromise", () => {
    it("resolves with the correct value", async () => {
        let result = await giveMePromise()
        expect(result).toBe("I am done without delay")
    })
})