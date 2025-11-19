import ErrorState from "@/components/ErrorState";
import HomeView from "@/components/HomeView";
import LoadingState from "@/components/LoadingState";
import { getQueryClient, trpc } from "@/trpc/server"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export const revalidate = 600;
const HomePage = async () => {
  const queryClient = getQueryClient();
  await Promise.all([
    // queryClient.ensureQueryData(trpc.portfolio.getPortfolioDataFromStrapi.queryOptions()),
    queryClient.ensureQueryData(trpc.portfolio.getPortfolioDataFromNotion.queryOptions()),
  ]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Suspense fallback={<LoadingState title='Retrieving' description='Please wait while we retrieve the portfolio data' />}>
        <ErrorBoundary fallback={<ErrorState title='Error Retrieving Data' description='There was an error while retrieving the data.' />}>
           <HomeView />
        </ErrorBoundary>
      </Suspense>
    </HydrationBoundary>
  )
}

export default HomePage