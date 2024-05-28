'use client'

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface IFormProps {
  search: string;
}

export default function SearchForm() {
  const { register, reset, handleSubmit, formState: { isValid } } = useForm<IFormProps>();
  const router = useRouter();
  
  const onSubmit: SubmitHandler<IFormProps> = useCallback((data) => {
    if (!data.search || !data.search.trim()) {
      return;
    }
    reset();
    router.push(`search?q=${data.search}`);
  }, [reset, router]);
  return (
    <Card className='mt-[4px]'>
      <form onSubmit={handleSubmit(onSubmit)} className='flex items-center'>
        <input type='search' className='text-sm px-3 flex-grow h-[38px] rounded-md' placeholder='검색' {...register('search', { required: true })} />
        <Button variant="outline" size="icon" className='flex-shrink-0 basis-auto' disabled={!isValid}>
          <Search />
        </Button>
      </form>
    </Card>
  )
}