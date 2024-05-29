import { revalidateTag } from 'next/cache';
import MbtiCarousel from './(home)/_component/MbtiCarousel';
import MainTitle from './_component/MainTitle';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getUserAll } from './(home)/_lib/getUserAll';
import UserCardList from './(home)/_component/UserCardList';

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['users', 'all'],
    queryFn: getUserAll,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <MainTitle>홈</MainTitle>
      <HydrationBoundary state={dehydratedState}>
        <MbtiCarousel />
        <div className='flex flex-col gap-2 px-2 pb-[100px] pt-[74px] sm:pt-2'>
          <UserCardList />
        </div>
      </HydrationBoundary>
    </>
  )
}