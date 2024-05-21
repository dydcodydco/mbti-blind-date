'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import Title from '../../_component/Title';
import { Progress } from '@/components/ui/progress';
import { useCallback, useContext } from 'react';
import { setUserContext } from './SetUserProvider';


export default function SetUserTop() {
  const { progress, setProgress } = useContext(setUserContext);
  const onClickBack = useCallback(() => {
    switch (progress) {
      case 10:
        setProgress(0);
        break;
      case 20:
        setProgress(10);
        break;
      case 30:
        setProgress(20);
        break;
      case 40:
        setProgress(30);
        break;
      case 50:
        setProgress(40);
        break;
      case 60:
        setProgress(50);
        break;
      case 70:
        setProgress(60);
        break;
      case 80:
        setProgress(70);
        break;
    }
  }, [progress, setProgress]);

  return (
    <>
      <Button variant="outline" size="icon" className='absolute left-2 top-[30px] w-[30px] h-[30px]' onClick={onClickBack}>
        <ArrowLeft className="h-4 w-4"  />
      </Button>
      <Title />
      <Progress value={progress}/>
    </>
  )
}