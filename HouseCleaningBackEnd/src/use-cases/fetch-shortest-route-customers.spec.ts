import { InMemoryCustomersRepository } from '@/repositories/in-memory/in-memory-customers-repository';
import { expect, describe, it, beforeEach } from 'vitest';
import { FetchShortestRouteCustomersUseCase } from './fetch-shortest-route-customers';

let customersRepository: InMemoryCustomersRepository;
let sut: FetchShortestRouteCustomersUseCase;

describe('Fetch Shortest Route Customers Use Case', () => {
    beforeEach(async () => {
        customersRepository = new InMemoryCustomersRepository();
        sut = new FetchShortestRouteCustomersUseCase(customersRepository);
    });

    it('should be possible to sort customers with the closest route', async () => {
        await customersRepository.create({
            name: 'Jhon Doe',
            email: 'jhondoe@example.com',
            phone: '5531999998877',
            coordinate_x: 5,
            coordinate_y: 5,
        });

        await customersRepository.create({
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            phone: '5531999998866',
            coordinate_x: 1,
            coordinate_y: 1,
        });

        await customersRepository.create({
            name: 'Jane Doe Doe',
            email: 'janedoedoe@example.com',
            phone: '5531999998866',
            coordinate_x: 10,
            coordinate_y: 10,
        });

        const { customers } = await sut.execute();

        expect(customers).toHaveLength(3);
        expect(customers[0].name).toBe('Jane Doe');
        expect(customers[1].name).toBe('Jhon Doe');
        expect(customers[2].name).toBe('Jane Doe Doe');
    });
});