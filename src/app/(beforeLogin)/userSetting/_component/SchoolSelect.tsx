'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCallback, useContext, useEffect } from 'react';
import { setUserContext } from './SetUserProvider';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SchoolSelect() {
  const { school, setSchool, setProgress, nickname } = useContext(setUserContext);
  const { register, handleSubmit, setFocus, formState: {isValid} } = useForm({
    defaultValues: {
      school: school
    },
  });

  useEffect(() => {
    setFocus('school');
  }, [setFocus])

  const onSchoolSubmit: SubmitHandler<{ school: string }> = useCallback(({ school }) => {
    setSchool(school);
    setProgress(75);
    console.log('학교', school);
  }, [setProgress, setSchool]);
  return (
    <form className='pt-5 flex flex-col flex-grow' onSubmit={handleSubmit(onSchoolSubmit)}>
      <h1>{nickname}님의 학교 알려주세요.</h1>
      <div className='flex justify-between mt-3 flex-grow'>
        <Input
          type="text" placeholder="nickname" {...register('school', {required: true})} />
      </div>
      <Button className='w-full' disabled={!isValid}>다음</Button>
    </form>
  )
}