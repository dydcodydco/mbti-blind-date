import Modal from '@/app/(afterLogin)/_component/Modal';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { IUser } from '@/model/User';
import { getAUser } from './_lib/getAUser';
import UserDetailContent from './_component/UserDetailContent';

type Props = { params: { userId: string } };

export async function generateMetadata({ params: {userId} }: Props) {
  return {
    title: userId,
  };
}

export default async function UserPage({ params }: Props) {
  const { userId } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({queryKey: ['users', userId], queryFn: getAUser});
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <Modal>
        <UserDetailContent userId={userId} />
      </Modal>
    </HydrationBoundary>
  )
}