import { cookies } from 'next/headers'

type Props = { pageParam: number };

export const getRoomsServer = async ({pageParam}: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/rooms?cursor=${pageParam}`, {
    next: {
      tags: ['rooms'],
    },
    credentials: 'include',
    headers: {Cookie: cookies().toString()},
    cache: 'no-store',
  });

  console.log(res, '----------------------------------------getRooms res');
  
  if (!res.ok) {
    throw new Error('getRooms 실행 실패');
  }

  return res.json();
}