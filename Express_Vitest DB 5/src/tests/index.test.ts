import { describe, it, expect, test,vi } from "vitest";
import { app } from "../index"
import request from "supertest";
import { prismaClient } from "../__mocks__/db";


// vi.mock('../db' , () => {
//     return{
//         prismaClient:{
//             sum: {
//                 create : vi.fn()
//             }
//         }
//     }
// });

//  we are moking out the logic in db file (prismaClint) and in index.ts logic is to sum.create entry in db.
// as app become more complex its very difficult to write all mocking logic by hand 1 by 1.   

//in index.ts => 
// const response = await prismaClient.sum.create({
//         data: {
//             a: parsedResponse.data.a,
//             b: parsedResponse.data.b,
//             result: answer
//         }
//     }) 

// so here deepmocking comes into pic // by itself fig out all keys and mock out them 
// npm i -D vitest-mock-extended

// create __mock__ folder and db.ts 

vi.mock('../db')

describe('POST /sum', () => {
    it("Should return the sum of given two numbers", async () => {
        prismaClient.sum.create.mockResolvedValue({
            id:1,
            a:1,
            b:2,
            result:3
        })
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


// describe('GET /sum', () => {

//     it("Should return sum of two numbers when input through headers", async () => {
//         const res = await request(app).get("/sum").set({
//             a: "1",
//             b: "2"
//         }).send();
//         expect(res.statusCode).toBe(200);
//         expect(res.body.answer).toBe(3);

//     })

//     it("Should return 411 error as no inputs are provided", async ()=> {
//         const res = await request(app).get("/sum").send();
//         expect(res.statusCode).toBe(411); 
//     })
// })



