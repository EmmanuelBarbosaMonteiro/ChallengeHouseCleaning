import { PrismaCustomersRepository } from '@/repositories/prisma/prisma-customers-repository';
import { RegisterCustomerUseCase } from '../register';

export function makeRegisterUseCase() {
    const customersRepository = new PrismaCustomersRepository();
    const registerCustomerUseCase = new RegisterCustomerUseCase(customersRepository);

    return registerCustomerUseCase;
}