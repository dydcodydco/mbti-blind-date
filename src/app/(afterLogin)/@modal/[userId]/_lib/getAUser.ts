import { IUser } from '@/model/User';
import { QueryFunction } from '@tanstack/react-query';

export const getAUser: QueryFunction<IUser, [_1: string, userId: string]> = async ({ queryKey }) => {
  const [_1, userId] = queryKey;
  console.log(userId, '---------------------------getAUser');
  const res = await fetch(`http://localhost:9090/api/users/${userId}`, {
    next: {
      tags: ['users', userId]
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('getAUser 호출 중 에러가 발생했습니다.')
  }

  return res.json();
}