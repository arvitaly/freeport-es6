import freeport from "./..";
describe("FreePort", () => {
    it("get port", async () => {
        const port = await freeport();
        expect(port > 0).toBeTruthy();
    });
});
