'use client';

import { Button } from '@/components/ui/button';
import style from '../userSetting.module.css';
import { useCallback, useContext, useEffect } from 'react';
import { setUserContext } from './SetUserProvider2';
import { SubmitHandler, useForm } from 'react-hook-form';

export default function DrinkSelect() {
  const { drink, setDrink, nickname, setProgress } = useContext(setUserContext);
  const { register, handleSubmit, formState: {isValid} } = useForm({
    defaultValues: {
      drink: drink,
    },
  });
  const drinkArr = ['안함', '가끔', '자주'];
  const onDrinkSubmit: SubmitHandler<any> = useCallback(({drink}) => {
    setDrink(drink);
    setProgress(65);
    console.log('음주', drink);
  }, [setDrink, setProgress]);
  
  const onChange = useCallback((drink: string) => () => {
    setDrink(drink);
    setProgress(65);
    console.log('음주', drink);
  }, [setDrink, setProgress]);
  return (
    <form
      className={`pt-5 flex flex-col flex-grow`}
      onSubmit={handleSubmit(onDrinkSubmit)}>
      <h1>{nickname}님은 술을 얼마나드시나요?</h1>
      <div className='grid grid-cols-2 gap-2 w-full mt-3'>
        {drinkArr.map((d) => (
          <label htmlFor={d} key={d} className={style.radioLabel}>
            <input id={d} type="radio" value={d} {...register('drink', { required: true })} onChange={onChange(d)} />
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