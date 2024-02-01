import { makeFetchCustomersUseCase } from '@/use-cases/factories/make-fetch-customers-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function fetchCustomers(request: FastifyRequest, reply: FastifyReply) {
    const fetchCustomersUseCase = makeFetchCustomersUseCase();

    const { customers } = await fetchCustomersUseCase.execute();

    return reply.status(200).send({
        customers
    });
}