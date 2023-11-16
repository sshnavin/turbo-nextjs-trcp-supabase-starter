import { createTRPCRouter, protectedProcedure } from '../trpc';

export const authRouter = createTRPCRouter({
    profile: protectedProcedure.query(async (opts) => {
        const data = await opts.ctx.supabase.auth.getUser();
        return {
            isAuthenticated: data.data.user !== null,
            ...data.data,
        };
    }),
});
