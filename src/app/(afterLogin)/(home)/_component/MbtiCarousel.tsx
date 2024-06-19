'use client';

import { Button } from '@/components/ui/button';
import style from './mbtiCarousel.module.css';
import { useMemo } from 'react';
import Link from 'next/link';

type Props = { mbtiList: [string, number][] };

export default function MbtiCarousel({mbtiList}: Props) {
  const highList = useMemo(() => {
    return Array.from(mbtiList).filter(([key, score]) => {
      if (score >= 80) return true;
    }).map(([d, value]) => d).join(',');
  }, [mbtiList]);
  const mbtiSingleList = useMemo(() => ['e', 'i', 's', 'n', 't', 'f', 'j', 'p'], []);
  return (
    <div className={style.menuWrapper}>
      <div className='w-[750px] flex gap-1 flex-wrap'>
        <Button variant={'outline'} className='p-0 max-h-[30px]'>
          <Link className='w-full h-full flex py-1 px-3 max-h-[30px] font-normal items-center justify-center' href='/'>전체</Link>
        </Button>
        <Button className='p-0 max-h-[30px]'>
          <Link className='w-full h-full flex py-1 px-3 max-h-[30px] font-normal items-center justify-center' href={`/mbti?type=${highList}`}>상위궁합</Link>
        </Button>
        {mbtiSingleList.map((d) => (
          <Button key={d} title={d} variant={'outline'} className='p-0 max-h-[30px]'>
            <Link className='w-full h-full flex py-1 px-3 max-h-[30px] font-normal items-center justify-center' href={`/mbti?type=${d}`}>{d.toUpperCase()}</Link>
          </Button>
        ))}
        {mbtiList.map(([key, value]) => (
          <Button key={key} title={key} variant={value >= 80 ? 'default' : 'outline'} className='p-0 max-h-[30px]'>
            <Link className='w-full h-full flex py-1 px-3 max-h-[30px] font-normal items-center justify-center' href={`/mbti?type=${key}`}>{key}</Link>
          </Button>
        ))}
      </div>
    </div>
  )
}