import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';
import LikeTabProvider from './_component/LikeTabProvider';
import Tab from './_component/Tab';
import TabDeciderSuspense from './_component/TabDeciderSuspense';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: '좋아요'
}

type Props = { searchParams: Record<string, string> };

export default async function LikePage({searchParams}: Props) {
  return (
    <LikeTabProvider>
      <MainTitle>좋아요</MainTitle>
      <div className='p-2 pb-[100px]'>
        <Tab />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense searchParams={searchParams} />
        </Suspense>
      </div>
    </LikeTabProvider>
  )
}