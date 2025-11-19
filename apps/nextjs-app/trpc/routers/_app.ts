import { portfolioRouter } from './portfolioProcedures';
import {  createTRPCRouter } from '../init';

export const appRouter = createTRPCRouter({
    portfolio: portfolioRouter,
});
// export type definition of API
export type AppRouter = typeof appRouter;