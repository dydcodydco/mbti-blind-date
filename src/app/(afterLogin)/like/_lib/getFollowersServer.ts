import { cookies } from 'next/headers';

export async function getFollowersServer() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/followers`, {
    next: {
      tags: ['users', 'followers']
    },
    cache: 'no-store',
    credentials: 'include',
    headers: {Cookie: cookies().toString()}
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // revalidateTag('all'); 초기화하기위한 함수
  // revalidatePath('/'); 초기화하기위한 함수
  return res.json();
}