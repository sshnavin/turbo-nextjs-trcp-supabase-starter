import { createClient } from '../supabase/server';
import { appRouter } from './routers/app';

export const api = () =>
    appRouter.createCaller({
        supabase: createClient(),
    });
