import { Button } from '@/components/ui/button';
import { CalendarPlus2, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function PromiseFormButton() {
  return (
    <Link href={'/promise/form'} className='px-2 block mt-2'>
      <Button className='flex justify-between w-full py-3 h-[50px]'>
        <span className='flex items-center'>
          <CalendarPlus2 className='mr-1' />
          어떤 약속을 잡고 싶나요?
        </span>
        <ChevronRight />
      </Button>
    </Link>
  )
}