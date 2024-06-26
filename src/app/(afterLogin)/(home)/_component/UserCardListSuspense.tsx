import UserCardList from './UserCardList';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { auth } from '@/auth';
import { getUserAllServer } from '../_lib/getUserAllServer';

export default async function UserCardListSuspense() {
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['users', 'all'],
    queryFn: getUserAllServer,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <UserCardList session={session} />
    </HydrationBoundary>
  )
}