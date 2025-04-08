import { describe, it, expect, test } from "vitest";
import { app } from "../index"
import request from "supertest";


describe('POST /sum', () => {
    it("Should return the sum of given two numbers", async () => {
        const res = await request(app).post("/sum").send({
            a: 1,
            b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
    it("Should return when no Inputs provided", async () => {
        const res = await request(app).post("/sum").send({
        });
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect Inputs");
    })
})


describe('GET /sum', () => {

    it("Should return sum of two numbers when input through headers", async () => {
        const res = await request(app).get("/sum").set({
            a: "1",
            b: "2"
        }).send();
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);

    })

    it("Should return 411 error as no inputs are provided", async ()=> {
        const res = await request(app).get("/sum").send();
        expect(res.statusCode).toBe(411); 
    })
})



