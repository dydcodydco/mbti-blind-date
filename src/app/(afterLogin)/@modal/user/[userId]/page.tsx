import Modal from '@/app/(afterLogin)/_component/Modal';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getSingleUser } from './_lib/getSingleUser';
import UserDetailContent from './_component/UserDetailContent';
import { getUserPromise } from './_lib/getUserPromise';
import { auth } from '@/auth';

export async function generateMetadata({ params: {userId} }: Props) {
  return {
    title: userId,
  };
}

type Props = { params: { userId: string } };

export default async function UserPage({ params }: Props) {
  const { userId } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({queryKey: ['users', userId], queryFn: getSingleUser});
  // await queryClient.prefetchQuery({queryKey: ['promise', 'users', userId], queryFn: getUserPromise});
  const dehydratedState = dehydrate(queryClient);
  const session = await auth();

  return (
    <HydrationBoundary state={dehydratedState}>
      <Modal>
        <UserDetailContent userId={userId} session={session} />
      </Modal>
    </HydrationBoundary>
  )
}