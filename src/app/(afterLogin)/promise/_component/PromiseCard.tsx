'use client';

import { IPost } from '@/model/Post';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HandMetal, MapPin, SquareX } from 'lucide-react';
import style from './promiseSection.module.css';
import ImageWithPlaceholder from '@/app/(afterLogin)/_component/ImageWithPlaceholder';
import PromiseCardLink from './PromiseCardLink';
import PromiseCardDropdown from './PromiseCardDropdown';
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ko';
import dayjs from "dayjs";
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { produce } from 'immer';
import { MouseEventHandler, useCallback } from 'react';
import { Session } from 'next-auth';
dayjs.locale('ko');
dayjs.extend(relativeTime)

type Props = { post: IPost, session: Session };

export default function PromiseCard({ post, session }: Props) {
  const queryClient = useQueryClient();
  // const { data: clientSession } = useSession();

  console.log(session, '-----------------------------PromiseCard session');
  const liked = !!post.Likers?.find(d => {
    return d?.email === session?.user?.email;
  });
  const { id: postId } = post;

  const like = useMutation({
    mutationFn: () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${postId}/like`, {
        method: 'PATCH',
        credentials: 'include',
      });
    },
    onMutate() {
      console.log('---------------------PromiseCard like onMutate');
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      console.log('querykey--------------', queryKeys);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'posts') {
          const value: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(d => d.id === postId);
            if (obj) {
              const pagesIndex = value.pages.findIndex(d => d.includes(obj));
              const index = value.pages[pagesIndex].findIndex(d => d.id === postId);
              const shallow = produce(value, draft => {
                draft.pages[pagesIndex][index].Likers = [{ id: session?.user?.email as string }];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            // 싱글 포스트인 경우
            if (value.id === postId) {
              const shallow = produce(value, draft => {
                draft.Likers = [{ id: session?.user?.email as string }];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      })
    },
    onError() {
      console.log('---------------------PromiseCard like onError');
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      console.log('querykey--------------', queryKeys);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'posts') {
          const value: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(d => d.id === postId);
            if (obj) {
              const pagesIndex = value.pages.findIndex(d => d.includes(obj));
              const index = value.pages[pagesIndex].findIndex(d => d.id === postId);
              const shallow = produce(value, draft => {
                draft.pages[pagesIndex][index].Likers = [];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            // 싱글 포스트인 경우
            if (value.id === postId) {
              const shallow = produce(value, draft => {
                draft.Likers = [];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      })
    },
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['posts']
      })
    }
  });

  const unLike = useMutation({
    mutationFn: () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${postId}/like`, {
        method: 'delete',
        credentials: 'include',
      })
    },
    onMutate() {
      console.log('---------------------PromiseCard unLike onMutate');
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      console.log('querykey--------------', queryKeys);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'posts') {
          const value: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(d => d.id === postId);
            if (obj) {
              const pagesIndex = value.pages.findIndex(d => d.includes(obj));
              const index = value.pages[pagesIndex].findIndex(d => d.id === postId);
              const shallow = produce(value, draft => {
                draft.pages[pagesIndex][index].Likers = [];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            // 싱글 포스트인 경우
            if (value.id === postId) {
              const shallow = produce(value, draft => {
                draft.Likers = [];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      })
    },
    onError() {
      console.log('---------------------PromiseCard unLike onError');
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      console.log('querykey--------------', queryKeys);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'posts') {
          const value: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(d => d.id === postId);
            if (obj) {
              const pagesIndex = value.pages.findIndex(d => d.includes(obj));
              const index = value.pages[pagesIndex].findIndex(d => d.id === postId);
              const shallow = produce(value, draft => {
                draft.pages[pagesIndex][index].Likers = [{ id: session?.user?.email as string }];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            // 싱글 포스트인 경우
            if (value.id === postId) {
              const shallow = produce(value, draft => {
                draft.Likers = [{ id: session?.user?.email as string }];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          }
        }
      })
    },
    onSettled() {
      queryClient.invalidateQueries({
        queryKey: ['posts']
      })
    }
  });

  const onClickLike: MouseEventHandler<HTMLButtonElement> = useCallback((e) => {
    e.stopPropagation();
    if (liked) {
      unLike.mutate();
    } else {
      like.mutate();
    }
  }, [liked, unLike, like]);

  return (
    <Card key={post.id} className='flex flex-col justify-between min-h-[400px] relative bg-black'>
      {post.Images?.length > 0 && <ImageWithPlaceholder src={`${post.Images[0]}`} />}
      <div className={style.promiseContent}>
        <div className='flex justify-between'>
          <PromiseCardLink post={post} />
          <PromiseCardDropdown post={post} />
        </div>
        <p className='font-extrabold text-xl text-white text-center'>{post.content}</p>
        <div>
          <span className='text-white font-semibold text-sm flex items-center'>
            <MapPin color='#ffffff' className='mr-1' />
              {post.User?.area || '서울'} · {dayjs(post.createdAt).fromNow()}
          </span>
          {post?.User?.email !== session?.user?.email && <Button variant={'outline'} className='flex w-full mt-1' onClick={onClickLike}>
            {!liked
              ? <><span className='mr-2'>궁금해요</span><HandMetal /></>
              : <><span className='mr-2'>안궁금해요</span><SquareX /></>}
          </Button>}
        </div>
      </div>
    </Card>
  )
}