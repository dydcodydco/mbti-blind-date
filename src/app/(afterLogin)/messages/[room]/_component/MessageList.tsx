'use client';

import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import { DefaultError, InfiniteData, useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { Message } from '@/model/Message';
import { getMessages } from '../_lib/getMessages';
import dayjs from 'dayjs';
import { useInView } from 'react-intersection-observer';
import { produce } from 'immer';
import { Session } from 'next-auth';
import style from './messages.module.css';
import { SocketContext } from '../../_component/SocketProvider';

type Props = { id: string, session: Session | null };

export default function MessageList({ id, session }: Props) {
  const listRef = useRef<HTMLDivElement>(null);
  const { socket, goDown, setGoDown } = useContext(SocketContext);
  const [adjustingScroll, setAdjustingScroll] = useState(false);
  // 메세지 데이터 받아서 쿼리 데이터에 넣어주기
  const {
    data: messages,
    isFetching,
    isLoading,
    isPending,
    hasPreviousPage,
    fetchPreviousPage,
  } = useInfiniteQuery<Message[], DefaultError, InfiniteData<Message[]>, [string, {
    senderId: string,
    receiverId: string
  }, string], number>({
    queryKey: ['rooms', {senderId: session?.user?.id!, receiverId: id}, 'messages'],
    queryFn: getMessages,
    initialPageParam: 0,
    getPreviousPageParam: (firstPage) => firstPage.length < 10 ? undefined : firstPage.at(0)?.id,
    getNextPageParam: (lastPage) => lastPage.length < 10 ? undefined : lastPage.at(-1)?.id,
    enabled: !!(session?.user?.email && id),
  })

  const { ref, inView } = useInView({
    threshold: 0,
    delay: 0,
  });

  // 데이터 변화 생길때마다 쿼리 데이터 리셋
  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.resetQueries({
      queryKey: ['rooms', { senderId: session?.user?.id!, receiverId: id }, 'messages'],
    });
  }, [id, queryClient, session?.user?.id]);

  
  // 소켓에서 받은 메세지 쿼리 데이터에 넣어주기
  useEffect(() => {
    socket?.on('receiveMessage', (data) => {
      console.log(data, 'data');
      const queryKey = ['rooms', { senderId: session?.user?.id!, receiverId: id }, 'messages'];
      const exMessage = queryClient.getQueryData(queryKey) as InfiniteData<Message[]>;
      
      if (exMessage && 'pages' in exMessage) {
        const shallow = produce(exMessage, (draft) => {
          const lastPage = draft.pages.at(-1);
          const newLastPage = lastPage ? lastPage : [];
          newLastPage.push(data);
        });
        queryClient.setQueryData(queryKey, shallow);
        setGoDown(true);
      }
    });

    return () => {
      socket?.off('receiveMessage')
    };
  }, [id, queryClient, session?.user?.id, setGoDown, socket]);

  // 스크롤 올릴 때 마다 이전 데이터가 있으면 호출
  useEffect(() => {
    if (inView) {
      if (!adjustingScroll && hasPreviousPage && !isLoading && !isPending) {
        const prevHeight = listRef.current?.scrollHeight || 0;
        fetchPreviousPage()
          .then(() => {
            setAdjustingScroll(true);
            setTimeout(() => {
              if (listRef.current) {
                listRef.current.scrollTop = listRef.current.scrollHeight - prevHeight;
              }
              setAdjustingScroll(false);
            }, 0)
        })  
      }
    }
  }, [inView, hasPreviousPage, fetchPreviousPage, adjustingScroll, isLoading, isPending]);

  let hasMessages = !!messages;
  useEffect(() => {
    if (hasMessages) {
      console.log(listRef.current);
      setTimeout(() => {
        if (listRef.current) {
          listRef.current.scrollTop = listRef.current?.scrollHeight;
        }
      }, 200);
    }
  }, [hasMessages, listRef]);

  useEffect(() => {
    if (goDown) {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current?.scrollHeight;
        setGoDown(false);
      }
    }
  }, [goDown, setGoDown]);

  return (
    <div className={style.messageList} ref={listRef}>
      {!adjustingScroll && hasPreviousPage && <div ref={ref} style={{height: 1, background: 'yellow'}}/>}
      {messages?.pages.map((page, pageIndex) => (
        <Fragment key={pageIndex}>
          {page.map(d => (
            d.SenderId === session?.user?.id ? (
              <div key={d.id} className='flex justify-center items-end flex-col'>
                <span className='inline-flex justify-center items-center p-3 py-2 sm:py-3 rounded-lg bg-slate-500 rounded-br-none text-white text-xs sm:text-base mb-1'>{d.content}</span>
                <span className='text-xs sm:text-sm'>{dayjs(d.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</span>
              </div>
            ) : (
              <div key={d.id} className='flex justify-center items-start flex-col'>
                <span className='inline-flex justify-center items-center p-3 py-2 sm:py-3 rounded-lg bg-slate-800 rounded-bl-none text-white text-xs sm:text-base mb-1'>{d.content}</span>
                <span className='text-xs sm:text-sm'>{dayjs(d.createdAt).format('YYYY년 MM월 DD일 A HH시 mm분')}</span>
              </div>
            )
        ))}
        </Fragment>
      ))}
    </div>
  )
}