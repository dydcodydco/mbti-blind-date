'use client';

import { Button } from '@/components/ui/button';
import { useContext } from 'react';
import { setUserContext } from './SetUserProvider2';

export default function GenderSelect() {
  const { gender, setGender, setProgress } = useContext(setUserContext);
  return (
    <div className='pt-5 flex flex-col flex-grow'>
      <h1>성별을 선택해주세요.</h1>
      <div className='flex justify-between mt-3 flex-grow'>
        <Button variant={gender === 'man' ? 'default' : 'outline'} onClick={() => { setGender('man'); setProgress(10); }}>남자</Button>
        <Button variant={gender === 'woman' ? 'default' : 'outline'} onClick={() => { setGender('woman'); setProgress(10); }}>여자</Button>
      </div>
      <Button className='w-full' onClick={() => setProgress(10)} disabled={!gender}>다음</Button>
    </div>
  )
}