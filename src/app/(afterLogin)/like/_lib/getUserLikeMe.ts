export async function getUserLikeMe() {
  const res = await fetch(`http://localhost:9090/api/usersLikeMe`, {
    next: {
      tags: ['users', 'likeMe']
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