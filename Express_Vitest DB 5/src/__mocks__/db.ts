import { PrismaClient } from '../generated/prisma'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

// 2
beforeEach(() => {
  mockReset(prismaClient)
})

// 3
export const prismaClient = mockDeep<PrismaClient>()