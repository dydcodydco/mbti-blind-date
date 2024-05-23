'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCallback, useContext, useEffect } from 'react';
import { setUserContext } from './SetUserProvider';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function JobSelect() {
  const { job, setJob, setProgress, nickname } = useContext(setUserContext);
  const { register, handleSubmit, setFocus, formState: {isValid} } = useForm({
    defaultValues: {
      job: job
    },
  });

  useEffect(() => {
    setFocus('job');
  }, [setFocus])

  const onSchoolSubmit: SubmitHandler<{ job: string }> = useCallback(({ job }) => {
    setJob(job);
    setProgress(80);
    console.log('학교', job);
  }, [setProgress, setJob]);
  return (
    <form className='pt-5 flex flex-col flex-grow' onSubmit={handleSubmit(onSchoolSubmit)}>
      <h1>{nickname}님은 어떤일을 하시나요?</h1>
      <div className='flex justify-between mt-3 flex-grow'>
        <Input
          type="text" placeholder="nickname" {...register('job', {required: true})} />
      </div>
      <Button className='w-full' disabled={!isValid}>다음</Button>
    </form>
  )
}