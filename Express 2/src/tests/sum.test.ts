import {describe, expect, test, it} from "@jest/globals";
import request  from "supertest";
import {app} from "../index";

describe('POST /sum', () => {
    it("should return the no of two numbers", async ()=> {
        const res = await request(app).post("/sum").send({
            a:1,
            b:2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
    })
})

describe('POST /"sum', () => {
    it("should return a multiple of two numbers ", async () => {
        const res = await request(app).post("/sum").send({
            a:-1,
            b:-2
        })
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(-3);
    })
})

















