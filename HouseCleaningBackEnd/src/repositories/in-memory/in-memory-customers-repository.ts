import { Customer, Prisma } from '@prisma/client';
import { CustomersRepository } from '../customers-repository';
import { randomUUID } from 'crypto';

export class InMemoryCustomersRepository implements CustomersRepository {
    public items: Customer[] = [];

    async findByEmail(email: string) {
        const customer = this.items.find((item) => item.email === email);

        if (!customer) {
            return null;
        }

        return customer;
    }

    async findManyCustomers() {
        return this.items;
    }

    async create(data: Prisma.CustomerCreateInput) {
        const customer = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            phone: data.phone,
            coordinate_x: new Prisma.Decimal(data.coordinate_x.toString()),
            coordinate_y: new Prisma.Decimal(data.coordinate_y.toString()),
        };

        this.items.push(customer);

        return customer;
    }
  
}