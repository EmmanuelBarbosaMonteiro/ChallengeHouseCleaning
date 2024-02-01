import { Customer, Prisma } from '@prisma/client';

export interface CustomersRepository {
  findByEmail(email: string): Promise<Customer | null>
  findManyCustomers(): Promise<Customer[]>
  create(data: Prisma.CustomerCreateInput): Promise<Customer>
}