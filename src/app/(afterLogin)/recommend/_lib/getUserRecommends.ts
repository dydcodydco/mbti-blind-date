export const getUserRecommends = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/userRecommends`, {
    next: {
      tags: ['users', 'recommends']
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('getUserRecommends 에러 발생했습니다.');
  }

  return res.json();
}