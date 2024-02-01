import { CustomersRepository } from '@/repositories/customers-repository';
import { Customer } from '@prisma/client';

interface SearchCustomersByPhoneUseCaseRequest {
  query: string
}

interface SearchCustomersByPhoneUseCaseResponse {
  customers: Customer[]
}

export class SearchCustomersByPhoneUseCase {
    constructor(private customersRepository: CustomersRepository) {}

    async execute({
        query,
    }: SearchCustomersByPhoneUseCaseRequest): Promise<SearchCustomersByPhoneUseCaseResponse> {
        if (!query.trim()) {
            return {
                customers: [],
            };
        }

        const customers = await this.customersRepository.searchManyByPhone(query);

        return {
            customers,
        };
    }
}