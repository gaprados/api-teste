import { FastifyInstance } from "fastify";
import { authRoutes } from "./auth";
import { usersRoutes } from "./users";

export function routes(app: FastifyInstance) {
  app.register(authRoutes);
  app.register(usersRoutes)
}