export async function getFollowings() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/followings`, {
    next: {
      tags: ['users', 'followings']
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