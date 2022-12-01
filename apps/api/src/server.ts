import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import { fastify, FastifyInstance } from 'fastify'
import { IncomingMessage, Server, ServerResponse } from 'http'

import { createContext } from './trpc/context'
import { appRouter } from './trpc/router'

const server: FastifyInstance<Server, IncomingMessage, ServerResponse> =
  fastify({ logger: true, maxParamLength: 5000 })

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext }
})

export default server
