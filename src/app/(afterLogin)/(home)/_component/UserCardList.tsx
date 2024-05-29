'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserAll } from '../_lib/getUserAll';
import UserCard from '@/app/(afterLogin)/_component/UserCard';
import { IUser } from '@/model/User';

export default function UserCardList() {
  const { data } = useQuery({
    queryKey: ['users', 'all'],
    queryFn: getUserAll,
    staleTime: 60 * 1000, // fresh -> stale, 5분 기준,
    gcTime: 60 * 1000 * 5, // 캐시타임, 기본 5분
    // getTime은 staleTime보다 무조건 더 커야한다!!
  });
  return (
    data?.map((user: IUser) => (
      <UserCard key={user.id} user={user} />
    ))
  )
} 