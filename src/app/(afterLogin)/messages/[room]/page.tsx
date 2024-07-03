import { auth } from '@/auth';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { getSingleUserServer } from '@/app/(afterLogin)/@modal/(.)tester/[userId]/_lib/getSingleUserServer';
import MessageList from './_component/MessageList';
import MessageForm from './_component/MessageForm';
// import SocketProvider from './_component/SocketProvider';
import MainTitle from '../../_component/MainTitle';
import MessageHeader from './_component/MessageHeader';

type Props = { params: { room: string } };

export default async function ChatRoom({ params }: Props) {
  const session = await auth();
  const queryClient = new QueryClient();
  const ids = params.room.split('-').filter(d => d !== session?.user?.id);
  if (!ids[0]) return null;
  const data = await queryClient.prefetchQuery({ queryKey: ['users', ids[0]], queryFn: getSingleUserServer });
  const dehydratedState = dehydrate(queryClient);
  console.log(data, '-----------------------------------chat room user');
  return (
    <HydrationBoundary state={dehydratedState}>
      <div className='flex flex-col h-dvh sm:pb-0 p-0 sm:p-2 overflow-hidden'>
        <MessageHeader id={ids[0]}/>
        <MessageList id={ids[0]} session={session} />
        <MessageForm id={ids[0]} />
      </div>
    </HydrationBoundary>
  )
}