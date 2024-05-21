'use client';

import { Button } from '@/components/ui/button';
import style from '../userSetting.module.css';
import { useCallback, useContext } from 'react';
import { setUserContext } from './SetUserProvider';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function ReligionSelect() {
  const { religionArr, setReligion, nickname, setProgress, progress } = useContext(setUserContext);
  const { register, handleSubmit, formState: {isValid} } = useForm();
  const onReligionSubmit: SubmitHandler<any> = useCallback(({religion}) => {
    const religionObj = religionArr.find(d => d.en === religion);
    setReligion(religionObj!);
    setProgress(60);
    console.log('종교', religionObj);
  }, [religionArr, setReligion, setProgress]);
  
  return (
    <form
      className={`pt-5 flex flex-col flex-grow ${progress === 50 ? '' : 'hidden'}`}
      onSubmit={handleSubmit(onReligionSubmit)}>
      <h1>{nickname}님의 종교를 알려주세요.</h1>
      <div className='grid grid-cols-2 gap-2 w-full mt-3'>
        {religionArr.map((item) => (
          <label htmlFor={item.en} key={item.en} className={style.radioLabel}>
            <input
              id={item.en} type="radio" value={item.en}
              {...register('religion', { required: true })} />
            <Button variant={'outline'} asChild>
              <div className='flex w-full h-auto bg-white'>
                {item.ko}
              </div>
            </Button>
          </label>
        ))}
      </div>
      <Button className='w-full mt-auto' disabled={!isValid}>다음</Button>
    </form>
  )
}