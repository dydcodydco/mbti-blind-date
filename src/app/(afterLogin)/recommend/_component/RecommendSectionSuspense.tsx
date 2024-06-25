import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { ReactNode } from 'react';
import RecommendSection from './RecommendSection';
import { getUserRecommends } from '../_lib/getUserRecommends';
import { auth } from '@/auth';

type Props = {children: ReactNode}

export default async function RecommendSectionSuspense() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['users', 'recommends'], queryFn: getUserRecommends });
  const dehydratedState = dehydrate(queryClient);
  const session = await auth();
  return (
    <HydrationBoundary state={dehydratedState}>
      <RecommendSection session={session} />
    </HydrationBoundary>
  )
}