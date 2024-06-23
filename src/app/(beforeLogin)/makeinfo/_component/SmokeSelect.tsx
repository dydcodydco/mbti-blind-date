'use client';

import { Button } from '@/components/ui/button';
import style from '../userSetting.module.css';
import { useCallback, useContext } from 'react';
import { setUserContext } from './SetUserProvider2';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function SmokeSelect() {
  const { smoke, setSmoke, nickname, setProgress } = useContext(setUserContext);
  const { register, handleSubmit, formState: {isValid} } = useForm({
    defaultValues: {
      smoke: smoke,
    },
  });
  const drinkArr = ['안함', '가끔', '자주'];
  const onDrinkSubmit: SubmitHandler<any> = useCallback(({smoke}) => {
    setSmoke(smoke);
    setProgress(70);
    console.log('흡연', smoke);
  }, [setSmoke, setProgress]);
  
  const onChange = useCallback((smoke: string) => () => {
    setSmoke(smoke);
    setProgress(70);
    console.log('흡연', smoke);
  }, [setSmoke, setProgress]);
  return (
    <form
      className={`pt-5 flex flex-col flex-grow`}
      onSubmit={handleSubmit(onDrinkSubmit)}>
      <h1>{nickname}님은 흡연 하시나요?</h1>
      <div className='grid grid-cols-2 gap-2 w-full mt-3'>
        {drinkArr.map((d) => (
          <label htmlFor={d} key={d} className={style.radioLabel}>
            <input id={d} type="radio" value={d} {...register('smoke', { required: true })} onChange={onChange(d)} />
            <Button variant={'outline'} asChild>
              <div className='flex w-full h-auto bg-white'>
                {d}
              </div>
            </Button>
          </label>
        ))}
      </div>
      <Button className='w-full mt-auto' disabled={!isValid}>다음</Button>
    </form>
  )
}