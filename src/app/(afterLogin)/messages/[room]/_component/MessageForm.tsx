'use client';

import { Button } from '@/components/ui/button';
import { ChangeEventHandler, KeyboardEventHandler, useCallback, useContext, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import TextareaAutosize from 'react-textarea-autosize';
import { InfiniteData, useQueryClient } from '@tanstack/react-query';
import { Message } from '@/model/Message';
import { produce } from 'immer';
import { SocketContext } from '../../_component/SocketProvider';
import { Session } from 'next-auth';

type Props = { id: string, session: Session | null; };
interface IFormProps {
  content: string;
}

export default function MessageForm({ id, session }: Props) {
  const { socket, setGoDown } = useContext(SocketContext);
  const { register, handleSubmit, reset, formState: { errors, isValid } } = useForm<IFormProps>();
  const queryClient = useQueryClient();
  
  const onSubmit: SubmitHandler<IFormProps> = useCallback((data) => {
    if (!id || !session?.user?.id) {
      return;
    }
    socket?.emit('sendMessage', {
      senderId: session?.user?.id,
      receiverId: id,
      content: data.content,
      room: `${id}-${session.user.id}` 
    });

    // 리액트 쿼리 데이터에 추가
    const exMessages = queryClient.getQueryData(['rooms', { senderId: session.user.id, receiverId: id }, 'messages']) as InfiniteData<Message[]>;
    if (exMessages && typeof exMessages === 'object') {
      const shallow = produce(exMessages, (draft) => {
        const lastPage = draft.pages.at(-1);
        const newLastPage = lastPage ? lastPage : [];
        let lastMessageId = newLastPage?.at(-1)?.id;
        const messageData = {
          SenderId: session?.user?.id!,
          ReceiverId: id,
          content: data.content,
          room: `${id}-${session?.user?.id}`,
          id: lastMessageId ? lastMessageId + 1 : 1,
          createdAt: new Date(),
        }
        draft.pages.at(-1)?.push(messageData);
      });
      queryClient.setQueryData(['rooms', { senderId: session?.user?.id, receiverId: id }, 'messages'], shallow);
      setGoDown(true);
    }

    reset();
  }, [id, session?.user?.id, socket, queryClient, reset, setGoDown]);

  const onKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.shiftKey) {
        return;
      }
      e.preventDefault();
      onSubmit({content: e.currentTarget.value as any});
    }
  }, [onSubmit]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex w-full p-4 pr-0 pb-0 sm:pb-4 bg-black fixed sm:static bottom-[50px]'
    >
      <TextareaAutosize className='grow min-h-[40px!important]' {...register('content', { required: '내용을 입력해주세요.' })} onKeyDown={onKeyDown} />
      <Button disabled={!isValid || !socket || !id || !session?.user?.id}>입력</Button>
    </form>
  )
}