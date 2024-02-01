import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';
import { makeSearchCustomersByPhoneUseCase } from '@/use-cases/factories/make-search-customers-by-phone-use-case';

export async function searchByPhone(request: FastifyRequest, reply: FastifyReply) {
    const searchCustomerQueryPhoneSchema = z.object({
        q: z.string(),
    });

    const { q } = searchCustomerQueryPhoneSchema.parse(request.query);

    const searchCustomersByPhoneUseCase = makeSearchCustomersByPhoneUseCase();

    const { customers } = await searchCustomersByPhoneUseCase.execute({
        query: q,
    });

    return reply.status(200).send({
        customers,
    });
}