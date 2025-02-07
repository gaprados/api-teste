import fastify from 'fastify';
import { routes } from './routes';

const app = fastify();

app.register(routes)

app.listen({
  host: '0.0.0.0',
  port: 3333
}).then(() => console.log('🚀 Server is running!'))