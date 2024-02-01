import fastify from 'fastify';
import { PrismaClient } from '@prisma/client';

export const app = fastify();

const prisma = new PrismaClient();

prisma.customer.create({
    data: {
        name: 'Emmmanuel',
        email: 'emmanuel@exemple.com',
        phone: '31988897039'
    }
});