import { PrismaCustomersRepository } from '@/repositories/prisma/prisma-customers-repository';
import { FetchCustomersUseCase } from '../fetch-customers';

export function makeFetchCustomersUseCase() {
    const customersRepository = new PrismaCustomersRepository();
    const fetchCustomersUseCase = new FetchCustomersUseCase(customersRepository);

    return fetchCustomersUseCase;
}