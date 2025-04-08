import {describe,it,expect} from "@jest/globals"
import request from "supertest"
import {app} from "../app"

describe('POST /sum', () => {
  
    it("should return the sum of two numbers", async ()=> {
        const result = await request(app).post("/sum").send({
            a:1,
            b:2
        })
        expect(result.statusCode).toBe(200);
        expect(result.body.answer).toBe(3);
    })

    it("should return 411 if no input are provided", async () => {
        const res = await request(app).post("/sum").send({});
        expect(res.statusCode).toBe(411);
        expect(res.body.message).toBe("Incorrect inputs")
    })
})





