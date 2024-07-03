'use client';

import MainTitle from '@/app/(afterLogin)/_component/MainTitle';
import { IUser } from '@/model/User';
import { useQueryClient } from '@tanstack/react-query';

type Props = { id: string };

export default function MessageHeader({ id }: Props) {
  const queryClient = useQueryClient();
  const user: IUser | undefined = queryClient.getQueryData(['users', id]);
  return (
    <MainTitle>{user?.nickname}과의 메세지</MainTitle>
  )
}