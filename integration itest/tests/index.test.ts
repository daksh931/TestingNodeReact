import { describe,expect,it, } from "vitest";
import request from "supertest";
import {app} from "../src/index"

describe("POST /sum", () => {
it('Should return sum of two numbers', async () => {
  const res = await request(app).post("/sum").send({
    a:1,
    b:2
});
expect(res.statusCode).toBe(200);
expect(res.body.answer).toBe(3);
})
})
