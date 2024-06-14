import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import PromiseSection from './PromiseSection';
import { getPromiseAll } from '../_lib/getPromiseAll';
import { auth } from '@/auth';
import { Session } from 'next-auth';

export default async function PromiseSectionSuspense() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'all'],
    queryFn: getPromiseAll,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  const session: Session | null = await auth();
  return (
    <HydrationBoundary state={dehydratedState}>
      <PromiseSection session={session} />
    </HydrationBoundary>
  )
}