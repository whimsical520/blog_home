import { createTRPCContext, trpcRouter } from '@/utils/trpcRouter'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'
import type { NextRequest } from 'next/server'

const handler = (request: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: trpcRouter,
    createContext: createTRPCContext
  })
}

export { handler as GET, handler as POST }