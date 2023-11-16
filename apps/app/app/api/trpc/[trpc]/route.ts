import { appRouter } from '@starter/backend/trpc/routers/app';
import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createClient } from '@starter/backend/supabase/server';

const handler = (req: Request) =>
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        createContext: () => ({
            supabase: createClient(),
        }),
    });

export { handler as GET, handler as POST };
