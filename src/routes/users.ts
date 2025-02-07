import { FastifyInstance } from "fastify";

export function usersRoutes(app: FastifyInstance) {
  app.get('/users', (request, reply) => {
    return reply.send({
      message: 'Hello Users2!'
    })
  })
}