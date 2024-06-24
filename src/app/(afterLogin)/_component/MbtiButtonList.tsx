'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';
import { useMemo } from 'react';

type Props = { mbtiList: [string, number][] };

function MbtiButtonList({ mbtiList }: Props) {
  const highList = useMemo(() => {
    return Array.from(mbtiList).filter(([key, score]) => {
      if (score >= 80) return true;
    }).map(([d, value]) => d).join(',');
  }, [mbtiList]);
  const mbtiSingleList = useMemo(() => ['e', 'i', 's', 'n', 't', 'f', 'j', 'p'], []);
  return (
    <>
      <Button variant={'outline'} className='p-0'>
        <Link className='w-full h-full flex py-1 px-3 max-h-[40px] font-normal items-center justify-center' href='/home'>전체</Link>
      </Button>
      <Button className='p-0'>
        <Link className='w-full h-full flex py-1 px-3 max-h-[40px] font-normal items-center justify-center' href={`/mbti?type=${highList}`}>상위궁합</Link>
      </Button>
      {mbtiSingleList.map((d) => (
        <Button key={d} title={d} variant={'outline'} className='p-0'>
          <Link className='w-full h-full flex py-1 px-3 max-h-[40px] font-normal items-center justify-center' href={`/mbti?type=${d}`}>{d.toUpperCase()}</Link>
        </Button>
      ))}
      {mbtiList.map(([key, value]) => (
        <Button key={key} title={key} variant={value >= 80 ? 'default' : 'outline'} className='p-0'>
          <Link className='w-full h-full flex py-1 px-3 max-h-[40px] font-normal items-center justify-center' href={`/mbti?type=${key}`}>{key}</Link>
        </Button>
      ))}
    </>
  )
}

export default React.memo(MbtiButtonList);