import fastify from 'fastify';

const app = fastify();

app.get('/', async (request, reply) => {
  return { hello: 'world' };
});

app.listen({
  host: '0.0.0.0',
  port: 3333
})