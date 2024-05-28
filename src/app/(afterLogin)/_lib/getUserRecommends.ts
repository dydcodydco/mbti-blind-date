export const getUserRecommends = async () => {
  const res = await fetch(`http://localhost:9090/api/userRecommends`, {
    next: {
      tags: ['users', 'recommends']
    },
    cache: 'no-store'
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}