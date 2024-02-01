import { CustomersRepository } from '@/repositories/customers-repository';
import { CustomerAlreadyExistsError } from './errors/customer-already-exists-error';
import { Customer } from '@prisma/client';

interface RegisterCustomerUseCaseRequest {
  name: string
  email: string
  phone: string
  coordinate_x: number
  coordinate_y: number
}

interface RegisterCustomerUseCaseResponse {
    customer: Customer
}

export class RegisterCustomerUseCase {
    constructor(private customersRepository: CustomersRepository) {}

    async execute({ name, email, phone, coordinate_x, coordinate_y }: RegisterCustomerUseCaseRequest): Promise<RegisterCustomerUseCaseResponse> {
        const customerWithSameEmail = await this.customersRepository.findByEmail(email);

        if (customerWithSameEmail) {
            throw new CustomerAlreadyExistsError();
        }

        const customer = await this.customersRepository.create({
            name,
            email,
            phone,
            coordinate_x,
            coordinate_y
        });

        return {
            customer,
        };
    }
}