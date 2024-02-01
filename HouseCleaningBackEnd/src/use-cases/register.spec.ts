import { InMemoryCustomersRepository } from '@/repositories/in-memory/in-memory-customers-repository';
import { RegisterCustomerUseCase } from './register';
import { describe, beforeEach, expect, it } from 'vitest';

let customersRepository: InMemoryCustomersRepository;
let sut: RegisterCustomerUseCase;

describe('Register Customer Use Case', () => {
    beforeEach(() => {
        customersRepository = new InMemoryCustomersRepository();
        sut = new RegisterCustomerUseCase(customersRepository);
    });

    it('should to register', async () => {
        const { customer } = await sut.execute({
            name: 'Jhon Doe',
            email: 'jhondoe@example.com',
            phone: '5531999998877',
            coordinate_x: 12546,
            coordinate_y: 12547,
        });

        expect(customer.id).toEqual(expect.any(String));
    });
});