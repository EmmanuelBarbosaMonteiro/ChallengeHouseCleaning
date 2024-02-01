import { CustomersRepository } from '../customers-repository';
import { Prisma } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export class PrismaCustomersRepository implements CustomersRepository {
    async findByEmail(email: string) {
        const customer = await prisma.customer.findUnique({
            where: {
                email,
            }
        });

        return customer;
    }

    async create(data: Prisma.CustomerCreateInput) {
        const customer = await prisma.customer.create({
            data,
        });

        return customer;
    }
}