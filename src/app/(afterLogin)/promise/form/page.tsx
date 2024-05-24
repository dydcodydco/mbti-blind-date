import PromiseFormModal from '@/app/(afterLogin)/@modal/(.)promise/form/page';
import PromiseSection from '@/app/(afterLogin)/promise/_component/PromiseSection'
import MainTitle from '@/app/(afterLogin)/_component/MainTitle';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CalendarPlus2, ChevronRight } from 'lucide-react';

export default function Page() {
  return (
    <>
      <PromiseFormModal />
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