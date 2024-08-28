import { initTRPC } from '@trpc/server'

interface CreateNextContextOptions {

}

// 1.封装一个上下文生成函数
export async function createTRPCContext(opts: CreateNextContextOptions) {
  // getServerSession 是从 @/server/auth 中导入的，与nextauth相关
  // const session = await getServerSession()
  const session = { user: { id: 1, name: '张三' } }
  return { session }
}

const t = initTRPC.context<typeof createTRPCContext>().create()

export const trpcRouter = t.router({ 
  hello: t.procedure.use(async (opts) => {
    console.log('======:', opts.ctx)
    return opts.next({
      ctx: {
        yyy: 213
      }
    })
  }).query((res) => {
    console.log('res:', res.ctx)
    return 'hello word';
  }),
});

export type trpcRouterType = typeof trpcRouter