import { CustomersRepository } from '@/repositories/customers-repository';
import { CustomerAlreadyExistsError } from './errors/customer-already-exists-error';

interface RegisterCustomerCaseRequest {
  name: string
  email: string
  phone: string
  coordinate_x: number
  coordinate_y: number
}

export class RegisterCustomerCase {
    constructor(private customersRepository: CustomersRepository) {}

    async execute({ name, email, phone, coordinate_x, coordinate_y }: RegisterCustomerCaseRequest) {
        const customerWithSameEmail = await this.customersRepository.findByEmail(email);

        if (customerWithSameEmail) {
            throw new CustomerAlreadyExistsError();
        }

        await this.customersRepository.create({
            name,
            email,
            phone,
            coordinate_x,
            coordinate_y
        });
    }
}