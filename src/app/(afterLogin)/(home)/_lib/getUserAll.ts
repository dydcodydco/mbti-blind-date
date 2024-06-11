type Props = { pageParam?: number };

export async function getUserAll({ pageParam }: Props) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userAll?cursor=${pageParam}`, {
    next: {
      tags: ['users', 'all']
    },
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // revalidateTag('all'); 초기화하기위한 함수
  // revalidatePath('/'); 초기화하기위한 함수
  return res.json();
}