import { CustomersRepository } from '@/repositories/customers-repository';
import { Customer } from '@prisma/client';

interface SearchCustomersByEmailUseCaseRequest {
  query: string
}

interface SearchCustomersByEmailUseCaseResponse {
  customers: Customer[]
}

export class SearchCustomersByEmailUseCase {
    constructor(private customersRepository: CustomersRepository) {}

    async execute({
        query,
    }: SearchCustomersByEmailUseCaseRequest): Promise<SearchCustomersByEmailUseCaseResponse> {
        if (!query.trim()) {
            return {
                customers: [],
            };
        }

        const customers = await this.customersRepository.searchManyByEmail(query);

        return {
            customers,
        };
    }
}