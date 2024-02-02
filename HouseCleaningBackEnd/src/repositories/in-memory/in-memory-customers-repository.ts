import { Customer, Prisma } from '@prisma/client';
import { CustomersRepository } from '../customers-repository';
import { randomUUID } from 'crypto';
import { getDistanceBetweenPoints } from '@/use-cases/utils/calculate-shortest';

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

    async searchManyByName(query: string) {
        return this.items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()));
    }

    async searchManyByEmail(query: string) {
        return this.items.filter((item) => item.email.toLowerCase().includes(query.toLowerCase()));
    }

    async searchManyByPhone(query: string) {
        return this.items.filter((item) => item.phone.includes(query));
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

    async findShortestRoute() {
        const sortedItems = [...this.items];
        
        sortedItems.sort((a, b) => {
            const distanceA = getDistanceBetweenPoints(a.coordinate_x.toNumber(), a.coordinate_y.toNumber());
            const distanceB = getDistanceBetweenPoints(b.coordinate_x.toNumber(), b.coordinate_y.toNumber());
            return distanceA - distanceB;
        });

        return sortedItems;
    }
  
}