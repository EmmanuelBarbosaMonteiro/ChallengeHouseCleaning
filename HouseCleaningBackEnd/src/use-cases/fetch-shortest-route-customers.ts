import { CustomersRepository } from '@/repositories/customers-repository';
import { Customer } from '@prisma/client';

interface FetchShortestRouteCustomersUseCaseResponse {
  customers: Customer[]
}

export class FetchShortestRouteCustomersUseCase {
    constructor(private customersRepository: CustomersRepository) {}

    async execute(): Promise<FetchShortestRouteCustomersUseCaseResponse> {
        const customers  = await this.customersRepository.findShortestRoute();

        return {
            customers,
        };
    }
}