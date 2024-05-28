export const getUserRecommends = async () => {
  const res = await fetch(`http://localhost:9090/api/userRecommends`, {
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