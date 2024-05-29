import UserCardList from './UserCardList';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getUserAll } from '../_lib/getUserAll';

export default async function UserCardListSuspense() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['users', 'all'],
    queryFn: getUserAll,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <UserCardList />
    </HydrationBoundary>
  )
}