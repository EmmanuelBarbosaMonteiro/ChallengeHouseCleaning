import { FastifyInstance } from 'fastify';
import { register } from './controllers/customers/register';
import { fetchCustomers } from './controllers/customers/fetch-customers';
import { searchByEmail } from './controllers/customers/search-customers-email';
import { searchByName } from './controllers/customers/search-customers-name';
import { searchByPhone } from './controllers/customers/search-customers-phone';
import { fetchRote } from './controllers/customers/fetch-rote';

export async function appRoutes(app: FastifyInstance) {
    app.post('/customers', register);
    app.get('/customers', fetchCustomers);
    app.get('/customers/route', fetchRote);
    app.get('/customers/search/email', searchByEmail);
    app.get('/customers/search/name', searchByName);
    app.get('/customers/search/phone', searchByPhone);
}