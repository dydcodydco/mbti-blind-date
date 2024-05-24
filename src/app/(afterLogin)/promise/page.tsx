import MainTitle from '../_component/MainTitle';
import PromiseSection from './_component/PromiseSection';
import { Metadata } from 'next';
import PromiseFormButton from './_component/PromiseFormButton';

export const metadata: Metadata = {
  title: '약속'
}

export default function Page() {
  return (
    <>
      <MainTitle>약속</MainTitle>
      <PromiseFormButton />
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <PromiseSection />
      </div>
    </>
  )
}