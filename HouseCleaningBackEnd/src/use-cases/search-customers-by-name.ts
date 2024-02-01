import { CustomersRepository } from '@/repositories/customers-repository';
import { Customer } from '@prisma/client';

interface SearchCustomersByNameUseCaseRequest {
  query: string
}

interface SearchCustomersByNameUseCaseResponse {
    customers: Customer[]
}

export class SearchCustomersByNameUseCase {
    constructor(private customersRepository: CustomersRepository) {}

    async execute({
        query,
    }: SearchCustomersByNameUseCaseRequest): Promise<SearchCustomersByNameUseCaseResponse> {
        if (!query.trim()) {
            return {
                customers: [],
            };
        }
    
        const customers = await this.customersRepository.searchManyByName(query);

        return {
            customers,
        };
    }
}