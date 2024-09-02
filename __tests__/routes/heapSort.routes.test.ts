import app from "../../src/app";
import request from "supertest";
import {seedData} from "../../seed/seedData";

describe("HeapSort routes", () => {
    test("HeapSort route should correctly sort seedData", async () => {
        const originalSeedData = [...seedData]; // create a copy of seedData for comparison
        const sortedSeedData = [...seedData].sort((a, b) => a - b);

        const res = await request(app).post("/heapSort").send(seedData);

        expect(res.body).toEqual(sortedSeedData); // expect the sorted result
        expect(res.body).not.toEqual(originalSeedData); // expect the result to not equal the original seedData
    }, 1000 * 10);
});