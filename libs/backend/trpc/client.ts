import { createTRPCReact } from '@trpc/react-query';
import { type AppRouter } from './routers/app';

export const api = createTRPCReact<AppRouter>({});
