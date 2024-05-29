import { IPost } from '@/model/Post';
import { QueryFunction } from '@tanstack/react-query';

export const getUserPromise: QueryFunction<IPost[], [_1: string, userId: string]> = async ({ queryKey }) => {
  const [_1, userId] = queryKey;
  const res = await fetch(`http://localhost:9090/api/promise/${userId}`, {
    next: {
      tags: ['promise', userId]
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('getUserPromise에러 에러 발생');
  }
  
  return res.json();
}