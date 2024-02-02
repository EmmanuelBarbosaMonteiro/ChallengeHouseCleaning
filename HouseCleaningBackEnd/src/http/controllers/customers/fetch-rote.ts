import { makeFetchShortestRouteUseCase } from '@/use-cases/factories/make-fetch-shortest-route-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function fetchRote(request: FastifyRequest, reply: FastifyReply) {
    const fetchShortestRouteUseCase = makeFetchShortestRouteUseCase();

    const { customers } = await fetchShortestRouteUseCase.execute();

    return reply.status(200).send({
        customers
    });
}