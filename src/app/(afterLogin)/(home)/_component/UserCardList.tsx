'use client';

import { useQuery } from '@tanstack/react-query';
import { getUserAll } from '../_lib/getUserAll';
import UserCard from '@/app/(afterLogin)/_component/UserCard';
import { IUser } from '@/model/User';

export default function UserCardList() {
  const { data } = useQuery({ queryKey: ['users', 'all'], queryFn: getUserAll });
  return (
    data.map((user: IUser) => (
      <UserCard key={user.id} user={user} />
    ))
  )
} 