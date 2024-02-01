import { PrismaCustomersRepository } from '@/repositories/prisma/prisma-customers-repository';
import { SearchCustomersByPhoneUseCase } from '../search-customers-by-phone';

export function makeSearchCustomersByPhoneUseCase() {
    const customersRepository = new PrismaCustomersRepository();
    const searchCustomersByPhoneUseCase = new SearchCustomersByPhoneUseCase(customersRepository);

    return searchCustomersByPhoneUseCase;
}