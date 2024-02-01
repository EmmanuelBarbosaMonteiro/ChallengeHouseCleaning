import { InMemoryCustomersRepository } from '@/repositories/in-memory/in-memory-customers-repository';
import { RegisterCustomerUseCase } from './register';
import { describe, beforeEach, expect, it } from 'vitest';
import { CustomerAlreadyExistsError } from './errors/customer-already-exists-error';

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

    it('shold not be able to register with same email twice', async () => {
        const email = 'jhondoe@example.com';

        await sut.execute({
            name: 'Jhon Doe',
            email,
            phone: '5531999998877',
            coordinate_x: 12546,
            coordinate_y: 12547,
        });

        expect(() =>
            sut.execute({
                name: 'Jhon Doe',
                email,
                phone: '5531999998877',
                coordinate_x: 12546,
                coordinate_y: 12547,
            }),
        ).rejects.toBeInstanceOf(CustomerAlreadyExistsError);
    });
});
