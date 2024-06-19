import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { auth } from '@/auth';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { getUserAllMbti } from '../_lib/getUserAllMbti';
import UserMbtiCardList from './UserMbtiCardList';

type Props = {
  searchParams: {
    [key: string]: string;
  };
};

export default async function UserMbtiCardListSuspense({searchParams}: Props) {
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['users', 'all', searchParams.type?.toUpperCase()],
    queryFn: getUserAllMbti,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <UserMbtiCardList session={session} searchParams={searchParams} />
    </HydrationBoundary>
  )
}