import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { ReactNode } from 'react';
import RecommendSection from './RecommendSection';
import { getUserRecommends } from '../_lib/getUserRecommends';
import { auth } from '@/auth';
import { mbtiCompatibility } from '../../_constants/constants';

type Props = {children: ReactNode}

export default async function RecommendSectionSuspense() {
  const session = await auth();
  const queryClient = new QueryClient();
  const mbtiCompatibilityData = mbtiCompatibility;
  const mbtiList = Object.entries(mbtiCompatibilityData[(session?.user as any)?.mbti.toUpperCase()]).filter(([mbti, score]) => score >= 80).map(([mbti, score]) => mbti);
  console.log(mbtiList, '--------------------------mbtiList RecommendSectionSuspense')
  await queryClient.prefetchQuery({ queryKey: ['users', 'recommends'], queryFn: () => getUserRecommends(mbtiList) });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <RecommendSection session={session} mbtiList={mbtiList} />
    </HydrationBoundary>
  )
}