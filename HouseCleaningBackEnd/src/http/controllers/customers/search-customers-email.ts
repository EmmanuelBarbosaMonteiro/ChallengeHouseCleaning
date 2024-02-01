import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeSearchCustomersByEmailUseCase } from '@/use-cases/factories/make-search-customers-by-email-use-case';

export async function searchByEmail(request: FastifyRequest, reply: FastifyReply) {
    const searchCustomerQueryEmailSchema = z.object({
        q: z.string(),
    });

    const { q } = searchCustomerQueryEmailSchema.parse(request.query);

    const searchCustomersByEmailUseCase = makeSearchCustomersByEmailUseCase();

    const { customers } = await searchCustomersByEmailUseCase.execute({
        query: q,
    });

    return reply.status(200).send({
        customers,
    });
}