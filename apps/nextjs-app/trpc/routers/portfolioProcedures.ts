import { createTRPCRouter, baseProcedure } from "@/trpc/init";
import { PortfolioData } from "@/lib/ts-types/portfolio";
import { fetchPortfolioDataFromNotion } from "@/lib/functions/notion";

import { redis } from "@/server/redis"; // adjust path
// ...existing imports

const PORTFOLIO_CACHE_KEY = "portfolio:notion:v1";
const PORTFOLIO_CACHE_TTL_SECONDS = 600; // 10 minutes

export const portfolioRouter = createTRPCRouter({
  getPortfolioDataFromNotion: baseProcedure.query(async () => {
    // If Redis env missing, just fall back to direct Notion
    if (!process.env.UPSTASH_REDIS_REST_URL || !process.env.UPSTASH_REDIS_REST_TOKEN) {
      const data = await fetchPortfolioDataFromNotion();
      return data;
    }

    // 1) Try cache first
    const cached = await redis.get<PortfolioData>(PORTFOLIO_CACHE_KEY);
    if (cached) {
      return cached;
    }

    // 2) Fallback → call Notion
    const data = await fetchPortfolioDataFromNotion();

    // 3) Store in Redis with TTL
    await redis.set(PORTFOLIO_CACHE_KEY, data, {
      ex: PORTFOLIO_CACHE_TTL_SECONDS,
    });

    return data;
  }),
});
