import { initTRPC } from '@trpc/server'

export const t = initTRPC.create()

export const appRouter = t.router({
  uptime: t.procedure.query(() => {
    return {
      uptime: process.uptime()
    }
  })
})

// export type definition of API
export type AppRouter = typeof appRouter
