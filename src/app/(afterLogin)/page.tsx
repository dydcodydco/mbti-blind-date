import { revalidateTag } from 'next/cache';
import MbtiCarousel from './(home)/_component/MbtiCarousel';
import MainTitle from './_component/MainTitle';
import UserCard from './_component/UserCard';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

async function getUserAll() {
  const res = await fetch(`http://localhost:9090/api/userAll`, {
    next: {
      tags: ['users', 'all']
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // revalidateTag('all'); 초기화하기위한 함수
  // revalidatePath('/'); 초기화하기위한 함수
  return res.json();
}

export default async function HomePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['users', 'all'], queryFn: getUserAll });
  const dehydratedState = dehydrate(queryClient);

  return (
    <>
      <MainTitle>홈</MainTitle>
      <HydrationBoundary state={dehydratedState}>
        <MbtiCarousel />
        <div className='flex flex-col gap-2 px-2 pb-[100px] pt-[74px] sm:pt-2'>
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </HydrationBoundary>
    </>
  )
}