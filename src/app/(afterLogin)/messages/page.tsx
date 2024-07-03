import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';
import { auth } from '@/auth';
import { getRooms } from './_lib/getRooms';
import { Room as IRoom } from '@/model/Room';
import Room from './_component/Room';
import { Suspense } from 'react';
import Loading from './loading';
import RoomSection from './_component/RoomSection';
import { HydrationBoundary, QueryClient, dehydrate, hydrate } from '@tanstack/react-query';
import { getRoomsServer } from './_lib/getRoomsServer';

export const metadata: Metadata = {
  title: '채팅'
}

export default async function Page() {
  const queryClient = new QueryClient();
  queryClient.prefetchInfiniteQuery({ queryKey: ['rooms'], queryFn: getRoomsServer, initialPageParam: 0 });
  const dehydrateState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydrateState}>
      <MainTitle>채팅</MainTitle>
      <Suspense fallback={<Loading />}>
        <RoomSection />
      </Suspense>
    </HydrationBoundary>
  )
}