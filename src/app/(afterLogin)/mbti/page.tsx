import { Suspense } from 'react';
import MainTitle from '../_component/MainTitle';
import MbtiCarousel from '../(home)/_component/MbtiCarousel';
import Loading from '@/app/(afterLogin)/(home)/loading';
import UserMbtiCardListSuspense from './_component/UserMbtiCardListSuspense';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';
import { mbtiCompatibility } from '../_constants/constants';
import { auth } from '@/auth';

export default async function Page({ searchParams }: Params) {
  console.log(searchParams, '------------------------------UserMbtiCardListSuspense searchPparams');
  const session = await auth();
  const mbtiCompatibilityData = mbtiCompatibility;
  const mbtiList = Object.entries(mbtiCompatibilityData[(session?.user as any)?.mbti.toUpperCase()]);
  return (
    <>
      <MainTitle>홈</MainTitle>
      <MbtiCarousel mbtiList={mbtiList} />
      <div className='flex flex-col gap-2 px-2 pb-[100px] pt-[74px] sm:pt-2'>
        <Suspense fallback={<Loading />}>
          <UserMbtiCardListSuspense searchParams={searchParams} />
        </Suspense>
      </div>
    </>
  )
}