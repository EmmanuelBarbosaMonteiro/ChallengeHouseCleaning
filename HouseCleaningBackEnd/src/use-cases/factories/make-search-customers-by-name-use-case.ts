import { PrismaCustomersRepository } from '@/repositories/prisma/prisma-customers-repository';
import { SearchCustomersByNameUseCase } from '../search-customers-by-name';

export function makeSearchCustomersByNameUseCase() {
    const customersRepository = new PrismaCustomersRepository();
    const searchCustomersByNameUseCase = new SearchCustomersByNameUseCase(customersRepository);

    return searchCustomersByNameUseCase;
}