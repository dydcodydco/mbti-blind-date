import { Message } from '@/model/Message';

type Props = {
  pageParam?: number, queryKey: [string, { senderId: string, receiverId: string }, string],
}

export const getMessages = async ({pageParam, queryKey}: Props) => {
  const [_, roomInfo] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/${roomInfo.senderId}/rooms/${roomInfo.receiverId}?cursor=${pageParam}`, {
    next: {
      tags: ['room'],
    },
    credentials: 'include',
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('getMessages 에러 발생');
  }

  return res.json();
}