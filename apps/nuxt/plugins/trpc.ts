import { createTRPCProxyClient, httpBatchLink } from '@trpc/client'
import type { AppRouter } from 'api/src/trpc/router'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      trpc: createTRPCProxyClient<AppRouter>({
        links: [
          httpBatchLink({
            url: 'http://localhost:4000/trpc'
          })
        ]
      })
    }
  }
})
