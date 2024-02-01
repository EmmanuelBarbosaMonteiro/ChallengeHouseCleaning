import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeSearchCustomersByNameUseCase } from '@/use-cases/factories/make-search-customers-by-name-use-case';

export async function searchByName(request: FastifyRequest, reply: FastifyReply) {
    const searchCustomerQueryNameSchema = z.object({
        q: z.string(),
    });

    const { q } = searchCustomerQueryNameSchema.parse(request.query);

    const searchCustomersByNameUseCase = makeSearchCustomersByNameUseCase();

    const { customers } = await searchCustomersByNameUseCase.execute({
        query: q,
    });

    return reply.status(200).send({
        customers,
    });
}