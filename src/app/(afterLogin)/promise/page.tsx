import { CalendarPlus2, ChevronRight } from 'lucide-react';
import MainTitle from '../_component/MainTitle';
import PromiseSection from './_component/PromiseSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '약속'
}

export default function Page() {
  return (
    <>
      <MainTitle>약속</MainTitle>
      <Link href={'/promise/form'} className='px-2 block'>
        <Button className='flex justify-between w-full py-3 h-[50px]'>
          <span className='flex items-center'>
            <CalendarPlus2 className='mr-1' />
            어떤 약속을 잡고 싶나요?
          </span>
          <ChevronRight />
        </Button>
      </Link>
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <PromiseSection />
      </div>
    </>
  )
}