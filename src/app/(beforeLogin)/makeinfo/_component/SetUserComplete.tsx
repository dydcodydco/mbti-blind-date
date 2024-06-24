'use client';

import { LoaderCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SetUserComplete() {
  const timeRef = useRef<NodeJS.Timeout | null>(null); // 타입 명시
  const router = useRouter();

  useEffect(() => {
    timeRef.current = setTimeout(() => {
      router.push('/home');
    }, 800);

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, [router]);
  return (
    <div className='flex flex-grow justify-center items-center'>
      <LoaderCircle className='animate-spin' size={40} />
    </div>
  )
}