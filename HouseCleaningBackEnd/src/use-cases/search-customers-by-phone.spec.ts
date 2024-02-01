import { InMemoryCustomersRepository } from '@/repositories/in-memory/in-memory-customers-repository';
import { expect, describe, it, beforeEach } from 'vitest';
import { SearchCustomersByPhoneUseCase } from './search-customers-by-phone';

let customersRepository: InMemoryCustomersRepository;
let sut: SearchCustomersByPhoneUseCase;

describe('Search Customers By Phone Use Case', () => {
    beforeEach(async () => {
        customersRepository = new InMemoryCustomersRepository;
        sut = new SearchCustomersByPhoneUseCase(customersRepository);
    });

    it('should be able to search customers by phone', async () => {
        await customersRepository.create({
            name: 'Jhon Doe',
            email: 'jhondoe@example.com',
            phone: '5531999996677',
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
            query: '88',
        });

        expect(customers).toHaveLength(2);
    });
});