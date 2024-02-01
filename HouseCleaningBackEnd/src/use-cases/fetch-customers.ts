import { CustomersRepository } from '@/repositories/customers-repository';
import { Customer } from '@prisma/client';

interface FetchCustomersUseCaseResponse {
  customers: Customer[]
}

export class FetchCustomersUseCase {
    constructor(private customersRepository: CustomersRepository) {}
  
    async execute(): Promise<FetchCustomersUseCaseResponse> {
        const customers  = await this.customersRepository.findManyCustomers();

        return {
            customers,
        };
    }
}