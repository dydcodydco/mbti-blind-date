import { revalidateTag } from 'next/cache';
import MbtiCarousel from './_component/MbtiCarousel';
import MainTitle from '../_component/MainTitle';
import { Suspense } from 'react';
import Loading from './loading';
import UserCardListSuspense from './_component/UserCardListSuspense';

export default async function HomePage() {
  return (
    <>
      <MainTitle>홈</MainTitle>
        <MbtiCarousel />
        <div className='flex flex-col gap-2 px-2 pb-[100px] pt-[74px] sm:pt-2'>
          <Suspense fallback={<Loading />}>
            <UserCardListSuspense />
          </Suspense>
        </div>
    </>
  )
}