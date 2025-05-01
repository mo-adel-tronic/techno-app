import { PrismaClient } from '@/generated/prisma';
import { Envireonment } from "./constants";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const db = globalForPrisma.prisma ?? new PrismaClient(
    {
        log: process.env.NODE_ENV === Envireonment.development ? ['query', 'info', 'warn'] : ['error'],
    }
)

if (process.env.NODE_ENV !== Envireonment.production) globalForPrisma.prisma = db;