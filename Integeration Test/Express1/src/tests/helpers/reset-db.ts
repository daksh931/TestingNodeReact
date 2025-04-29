import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async ()=> {
    await prisma.$transaction([   // either all operations succeed, or none do (rollback on error).
        prisma.request.deleteMany(),
    ])
}