import { InMemoryCustomersRepository } from '@/repositories/in-memory/in-memory-customers-repository';
import { expect, describe, it, beforeEach } from 'vitest';
import { FetchCustomersUseCase } from './fetch-customers';

let customersRepository: InMemoryCustomersRepository;
let sut: FetchCustomersUseCase;

describe('Fetch Customers Use Case', () => {
    beforeEach(async () => {
        customersRepository = new InMemoryCustomersRepository();
        sut = new FetchCustomersUseCase(customersRepository);
    });

    it('should be able to fetch customers', async () => {
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
            coordinate_x: 12548,
            coordinate_y: 12542,
        });

        const { customers } = await sut.execute();

        expect(customers).toHaveLength(2);
        expect(customers).toEqual([
            expect.objectContaining({ name: 'Jhon Doe' }),
            expect.objectContaining({ name: 'Jane Doe' })
        ]);
    });
});