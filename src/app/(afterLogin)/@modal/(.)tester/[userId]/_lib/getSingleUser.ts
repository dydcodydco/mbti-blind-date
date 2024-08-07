import { IUser } from '@/model/User';
import { QueryFunction } from '@tanstack/react-query';

export const getSingleUser: QueryFunction<IUser, [_1: string, userId: string]> = async ({ queryKey }) => {
  const [_1, userId] = queryKey;
  console.log(userId, '---------------------------getSingleUser');
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}`, {
    next: {
      tags: ['users', userId]
    },
    cache: 'no-store',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('getSingleUser 호출 중 에러가 발생했습니다.')
  }

  return res.json();
}