import MainTitle from '../_component/MainTitle';
import { Metadata } from 'next';
import PromiseFormButton from './_component/PromiseFormButton';
import { Suspense } from 'react';
import Loading from '../(home)/loading';
import PromiseSectionSuspense from './_component/PromiseSectionSuspense';

export const metadata: Metadata = {
  title: '약속'
}

export default async function PromisePage() {
  
  return (
    <>
      <MainTitle>약속</MainTitle>
      <PromiseFormButton />
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <Suspense fallback={<Loading />}>
          <PromiseSectionSuspense />
        </Suspense>
      </div>
    </>
  )
}