import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';
import RecommendSection from './_component/RecommendSection';
import style from './recommend.module.css'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getUserRecommends } from './_lib/getUserRecommends';

export const metadata: Metadata = {
  title: '추천'
}

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['users', 'recommends'], queryFn: getUserRecommends });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className={style.recommendSection}>
        <div className='absolute w-full'>
          <MainTitle>추천</MainTitle>
        </div>
        <RecommendSection />
      </div>
    </HydrationBoundary>
  )
}