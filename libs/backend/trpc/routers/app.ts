import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';
import { authRouter } from './auth';
import { db } from '../../drizzle/db';
import { test } from '../../drizzle/schema';
import { z } from 'zod';

export const appRouter = createTRPCRouter({
    hello: publicProcedure.query(async (opts) => {
        return {
            greeting: `hello and works!`,
        };
    }),
    test: publicProcedure.query(async (opts) => {
        return db.select().from(test);
    }),
    upload: protectedProcedure.input(z.any()).query(async (opts) => {
        const { data } = await opts.ctx.supabase.auth.getUser();
        return opts.ctx.supabase.storage
            .from('local-cdn')
            .upload(`${data.user?.id}/${opts.input.name}`, opts.input);
    }),
    auth: authRouter,
});

export type AppRouter = typeof appRouter;
