import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';
import RecommendSection from './_component/RecommendSection';
import style from './recommend.module.css'
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getUserRecommends } from './_lib/getUserRecommends';
import RecommendSectionSuspense from './_component/RecommendSectionSuspense';

export const metadata: Metadata = {
  title: '추천'
}

export default async function Page() {
  
  return (
    <div className={style.recommendSection}>
      <div className='absolute w-full'>
        <MainTitle>추천</MainTitle>
      </div>
      <RecommendSectionSuspense />
    </div>
  )
}