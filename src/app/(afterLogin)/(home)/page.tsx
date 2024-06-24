import { revalidateTag } from 'next/cache';
import MbtiCarousel from './_component/MbtiCarousel';
import MainTitle from '../_component/MainTitle';
import { Suspense } from 'react';
import Loading from './loading';
import UserCardListSuspense from './_component/UserCardListSuspense';
import { mbtiCompatibility } from '../_constants/constants';
import { auth } from '@/auth';

export default async function HomePage() {
  const session = await auth();
  const mbtiCompatibilityData = mbtiCompatibility;
  const mbtiList = Object.entries(mbtiCompatibilityData[(session?.user as any)?.mbti.toUpperCase()]);
  return (
    <>
      <MainTitle>홈</MainTitle>
        <MbtiCarousel mbtiList={mbtiList} />
        <div className='flex flex-col gap-2 px-2 pb-[100px] pt-[74px] sm:pt-2'>
          <Suspense fallback={<Loading className='mt-20' />}>
            <UserCardListSuspense />
          </Suspense>
        </div>
    </>
  )
}