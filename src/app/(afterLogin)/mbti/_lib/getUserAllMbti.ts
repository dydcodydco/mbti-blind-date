type Props = { pageParam?: number, queryKey: any };

export async function getUserAllMbti({ pageParam, queryKey }: Props) {
  const [_1, _2, mbti] = queryKey;
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/all?cursor=${pageParam}&mbti=${mbti}`, {
    next: {
      tags: ['users', 'all', , mbti],
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