import { PrismaCustomersRepository } from '@/repositories/prisma/prisma-customers-repository';
import { SearchCustomersByEmailUseCase } from '../search-customers-by-email';

export function makeSearchCustomersByEmailUseCase() {
    const customersRepository = new PrismaCustomersRepository();
    const searchCustomersByEmailUseCase = new SearchCustomersByEmailUseCase(customersRepository);

    return searchCustomersByEmailUseCase;
}