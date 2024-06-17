type Props = { pageParam?: number };

export const getPromiseAll = async ({pageParam}: Props) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/all?cursor=${pageParam}`, {
    next: {
      tags: ['posts', 'all']
    },
    cache: 'no-store',
    credentials: 'include',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  // revalidateTag('all'); 초기화하기위한 함수
  // revalidatePath('/'); 초기화하기위한 함수
  // console.log(res.json(), '---------------------getPromiseAll res');
  return res.json();
}