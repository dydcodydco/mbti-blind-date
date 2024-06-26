type Props = { pageParam: number };

export async function getFollowers({ pageParam }: Props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/followers?cursor=${pageParam}`, {
    next: {
      tags: ['users', 'followers']
    },
    cache: 'no-store',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // revalidateTag('all'); 초기화하기위한 함수
  // revalidatePath('/'); 초기화하기위한 함수
  return res.json();
}