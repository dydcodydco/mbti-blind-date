'use client';

import { Room as IRoom } from '@/model/Room';
import Room from './Room';
import { Fragment, useContext, useEffect } from 'react';
import { SocketContext } from './SocketProvider';
import { DefaultError, InfiniteData, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { getRooms } from '../_lib/getRooms';
import { produce } from 'immer';
import { Message } from '@/model/Message';
import { useInView } from 'react-intersection-observer';
import { useSession } from 'next-auth/react';

export default function RoomSection() {
  const { socket } = useContext(SocketContext);
  const queryClient = useQueryClient();
  const { data: session } = useSession();
  const { data, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery<IRoom[], DefaultError, InfiniteData<IRoom[]>, [string], number>({
    queryKey: ['rooms'],
    queryFn: getRooms,
    initialPageParam: 0,
    getNextPageParam: (lastPage) => lastPage?.at(-1)?.id,
  });

  socket?.on('receiveMessage', (data: Message) => {
    console.log(data, '-----------------룸 섹션에 메세지가 왔습니다.');
    const rooms = queryClient.getQueryData<InfiniteData<IRoom[]>>
      (['rooms']);
    if (!rooms) return;
    const obj = rooms?.pages.flat().find(d => d.room === data.room);
    if (obj) {
      const pagesIndex = rooms?.pages.findIndex(d => d.includes(obj));
      const index = rooms?.pages[pagesIndex].findIndex(d => d.room === data.room);
      const shallow = produce(rooms, (draft) => {
        draft.pages[pagesIndex][index].content = data.content;
      });
      queryClient.setQueryData(['rooms'], shallow);
    }
  });

  const { ref, inView } = useInView({
    delay: 0,
    threshold: 0,
  });
  useEffect(() => {
    if (inView) {
      hasNextPage && fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return (
    <>
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        {data?.pages.map((page, i: number) => (
          <Fragment key={i}>
            {page.map(room => <Room key={room.room} room={room} session={session} />)}
          </Fragment>
        ))}
      </div>
      {hasNextPage && <div ref={ref} style={{height: 1}} />}
    </>
  )
}