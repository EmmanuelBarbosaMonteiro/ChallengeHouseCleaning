import { CustomerAlreadyExistsError } from '@/use-cases/errors/customer-already-exists-error';
import { makeRegisterUseCase } from '@/use-cases/factories/make-register-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

export async function register(request: FastifyRequest, reply: FastifyReply) {
    const registerBodySchema = z.object({
        name: z.string(),
        email: z.string().email(),
        phone: z.string(),
        coordinate_x: z.number(),
        coordinate_y: z.number()
    });

    const { name, email, phone, coordinate_x, coordinate_y } = registerBodySchema.parse(request.body);

    try {
        const registerCustomerUseCase = makeRegisterUseCase();

        return reply.status(201).send( await registerCustomerUseCase.execute({
            name,
            email,
            phone,
            coordinate_x,
            coordinate_y,
        }));

    } catch (err) {
        if (err instanceof CustomerAlreadyExistsError) {
            return reply.status(409).send({ messege: err.message });
        }

        throw err;
    }
}