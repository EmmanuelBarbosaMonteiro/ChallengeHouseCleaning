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

    async findManyCustomers() {
        const customers = await prisma.customer.findMany();

        return customers;
    }

    async searchManyByName(query: string) {
        const customers = await prisma.customer.findMany({
            where: {
                name: {
                    contains: query.toLowerCase()
                }
            }
        });

        return customers;
    }

    async searchManyByEmail(query: string) {
        const customers = await prisma.customer.findMany({
            where: {
                email: {
                    contains: query.toLowerCase()
                }
            }
        });

        return customers;
    }

    async searchManyByPhone(query: string) {
        const customers = await prisma.customer.findMany({
            where: {
                phone: {
                    contains: query
                }
            }
        });

        return customers;
    }

    async create(data: Prisma.CustomerCreateInput) {
        const customer = await prisma.customer.create({
            data,
        });

        return customer;
    }
}