import { InMemoryCustomersRepository } from '@/repositories/in-memory/in-memory-customers-repository';
import { expect, describe, it, beforeEach } from 'vitest';
import { SearchCustomerUseCase } from './search-customers';

let customersRepository: InMemoryCustomersRepository;
let sut: SearchCustomerUseCase;

describe('Search Customers Use Case', () => {
    beforeEach(async () => {
        customersRepository = new InMemoryCustomersRepository;
        sut = new SearchCustomerUseCase(customersRepository);
    });

    it('should be able to search for customer', async () => {
        await customersRepository.create({
            name: 'Jhon Doe',
            email: 'jhondoe@example.com',
            phone: '5531999998877',
            coordinate_x: 12546,
            coordinate_y: 12547,
        });

        await customersRepository.create({
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            phone: '5531999998866',
            coordinate_x: 12542,
            coordinate_y: 12544,
        });

        await customersRepository.create({
            name: 'Jane Doe Doe',
            email: 'janedoedoe@example.com',
            phone: '5531999998855',
            coordinate_x: 12541,
            coordinate_y: 12542,
        });

        const { customers } = await sut.execute({
            query: 'jane',
        });

        expect(customers).toHaveLength(2);
    });
});