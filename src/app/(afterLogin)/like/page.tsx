import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';
import LikeTabProvider from './_component/LikeTabProvider';
import Tab from './_component/Tab';
import TabDecider from './_component/TabDecider';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getUserLikeMe } from './_lib/getUserLikeMe';

export const metadata: Metadata = {
  title: '좋아요'
}

export default async function LikePage() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['users', 'likeMe'], queryFn: getUserLikeMe });
  const dehydratedState = dehydrate(queryClient);
  return (
    <>
      <HydrationBoundary state={dehydratedState}>
        <LikeTabProvider>
          <MainTitle>좋아요</MainTitle>
          <div className='p-2 pb-[100px]'>
            <Tab />
            <TabDecider />
          </div>
        </LikeTabProvider>
      </HydrationBoundary>
    </>
  )
}