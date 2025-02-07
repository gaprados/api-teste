import { FastifyInstance } from "fastify";

export function authRoutes(app: FastifyInstance) {
  app.get('/auth', (request, reply) => {
    return reply.send({
      message: 'Hello Auth2!'
    })
  })
}