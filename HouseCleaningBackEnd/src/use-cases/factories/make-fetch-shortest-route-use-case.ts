import { PrismaCustomersRepository } from '@/repositories/prisma/prisma-customers-repository';
import { FetchShortestRouteCustomersUseCase } from '../fetch-shortest-route-customers';

export function makeFetchShortestRouteUseCase() {
    const customersRepository = new PrismaCustomersRepository();
    const fetchShortestRouteCustomersUseCase = new FetchShortestRouteCustomersUseCase(customersRepository);

    return fetchShortestRouteCustomersUseCase;
}