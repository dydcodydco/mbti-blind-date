import MainTitle from '../_component/MainTitle';
import PromiseSection from './_component/PromiseSection';
import { Metadata } from 'next';
import PromiseFormButton from './_component/PromiseFormButton';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPromiseAll } from './_lib/getPromiseAll';
import { Suspense } from 'react';
import Loading from '../(home)/loading';

export const metadata: Metadata = {
  title: '약속'
}

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ['posts', 'all'],
    queryFn: getPromiseAll,
    initialPageParam: 0,
  });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <MainTitle>약속</MainTitle>
      <PromiseFormButton />
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <Suspense fallback={<Loading />}>
          <PromiseSection />
        </Suspense>
      </div>
    </HydrationBoundary>
  )
}