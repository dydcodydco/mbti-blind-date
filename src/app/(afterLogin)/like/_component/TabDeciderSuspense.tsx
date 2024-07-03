import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import TabDecider from './TabDecider';
import { getFollowingsServer } from '../_lib/getFollowingsServer';
import { getFollowersServer } from '../_lib/getFollowersServer';
import { auth } from '@/auth';

type Props = { searchParams: Record<string, string> };

export default async function TabDeciderSuspense({ searchParams }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['users', searchParams?.type === 'followings' ? 'followings' : 'followers'],
    queryFn: searchParams?.type === 'followings' ? getFollowingsServer : getFollowersServer,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  const session = await auth();
  return (
    <HydrationBoundary state={dehydratedState}>
      <TabDecider session={session} />
    </HydrationBoundary>
  )
}