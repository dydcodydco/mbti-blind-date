'use client';

import Modal from '@/app/(afterLogin)/_component/Modal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ImageUp, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

type FormProps = {
  promise: string;
  imageFiles: FileList;
}

export default function PromiseFormModal() {
  const { register, setFocus, handleSubmit, formState: { errors, isValid } } = useForm<FormProps>();
  const router = useRouter();

  useEffect(() => {
    setFocus('promise');
  }, [setFocus]);
  
  const onSubmit: SubmitHandler<FormProps> = useCallback(data => {
    console.log(data);
  }, []);

  const onClickClose = useCallback(() => {
    router.back();
  }, [router]);
  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col flex-grow'>
        <div className='flex-grow'>
          <h1 className='font-bold flex justify-between items-center mb-1'>
            <Button variant="ghost" size="icon" className='justify-start' onClick={onClickClose}>
              <X />
            </Button>
            약속
          </h1>
          <Textarea placeholder="Type your message here." className='rounded-lg resize-none h-[200px]'
            {...register('promise', {
              required: '약속 내용을 입력해주세요.'
            })}
          />
          {errors.promise && <p>{errors.promise.message}</p>}
        </div>
        <div className='flex items-center gap-2 mt-3'>
          <input id='image' type="file" hidden accept='image/*' {...register('imageFiles')} />
          <label htmlFor='image' className='cursor-pointer'>
            <ImageUp size={40} />
          </label>
          <Button className='flex-grow' disabled={!isValid}>약속 만들기</Button>
        </div>
      </form>
    </Modal>  
  )
}