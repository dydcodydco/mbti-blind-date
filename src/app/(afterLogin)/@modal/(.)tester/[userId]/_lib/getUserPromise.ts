import { IPost } from '@/model/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getUserPromise: QueryFunction<IPost[], [_1: string, _2:string, userId: string]> = async ({ queryKey }) => {
  const [_1, _2, userId] = queryKey;
  const res = await fetch(`h${process.env.NEXT_PUBLIC_BASE_URL}/api/promise/${userId}`, {
    next: {
      tags: ['promise', 'users', userId]
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('getUserPromise에러 에러 발생');
  }
  
  return res.json();
}