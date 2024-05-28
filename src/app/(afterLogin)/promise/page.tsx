import MainTitle from '../_component/MainTitle';
import PromiseSection from './_component/PromiseSection';
import { Metadata } from 'next';
import PromiseFormButton from './_component/PromiseFormButton';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getPromiseAll } from './_lib/getPromiseAll';

export const metadata: Metadata = {
  title: '약속'
}

export default async function Page() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({ queryKey: ['users', 'promise', 'all'], queryFn: getPromiseAll });
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>
      <MainTitle>약속</MainTitle>
      <PromiseFormButton />
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <PromiseSection />
      </div>
    </HydrationBoundary>
  )
}