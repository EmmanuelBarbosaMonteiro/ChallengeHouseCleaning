import { CustomersRepository } from '@/repositories/customers-repository';
import { Customer } from '@prisma/client';

interface SearchCustomerUseCaseRequest {
  query: string
}

interface SearchCustomerUseCaseResponse {
  customers: Customer[]
}

export class SearchCustomerUseCase {
    constructor(private customersRepository: CustomersRepository) {}

    async execute({
        query,
    }: SearchCustomerUseCaseRequest): Promise<SearchCustomerUseCaseResponse> {
        const customers = await this.customersRepository.searchManyByName(query);

        return {
            customers,
        };
    }
}