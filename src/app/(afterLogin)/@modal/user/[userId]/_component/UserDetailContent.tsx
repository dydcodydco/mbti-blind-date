'use client';

import { UserMinus, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UserDetailTop from './UserDetailTop';
import { InfiniteData, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { getSingleUser } from '../_lib/getSingleUser';
import { IUser } from '@/model/User';
import UserDetailPromise from './UserDetailPromise';
import UserInfo from './UserInfo';
import Back from '@/app/(afterLogin)/_component/Back';
import { Session } from 'next-auth';
import { produce } from 'immer';
import { MouseEventHandler } from 'react';
import PromiseCard from '@/app/(afterLogin)/promise/_component/PromiseCard';
import { IPost } from '@/model/Post';

type Props = {
  userId: string;
  session: Session | null;
}

export default function UserDetailContent({userId, session}: Props) {
  const { data: user, error, isLoading } = useQuery<IUser, Object, IUser, [_1: string, userId: string]>({
    queryKey: ['users', userId],
    queryFn: getSingleUser,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  });
  const userIdStr = userId.toString();
  const followed = !!user?.Followers?.find((v) => v.id.toString() === session?.user?.id?.toString());
  console.log(user, '--------------------------UserDetailContent user');
  console.log(followed, '--------------------------UserDetailContent followed');
  const queryClient = useQueryClient();

  const follow = useMutation({
    mutationFn: (userId: string | number) => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}/follow`, {
        method: 'PATCH',
        credentials: 'include',
      });
    },
    onMutate(userId: string | number) {
      const value2: IUser | undefined = queryClient.getQueryData(['users', userIdStr]);
      console.log(value2, '---------------------follow');
      if (value2) {
        const shallow = produce(value2, draft => {
          draft.Followers = [{ id: session?.user?.id as string }];
          // draft._count.Followers += 1;
        });
        queryClient.setQueryData(['users', userIdStr], shallow);
      }
    },
    onError(error, userId: string | number) {
      const value2: IUser | undefined = queryClient.getQueryData(['users', userIdStr]);
      if (value2) {
        const shallow = produce(value2, draft => {
          draft.Followers = draft.Followers.filter(d => d.id !== session?.user?.id);
          // draft._count.Followers -= 1;
        });
        queryClient.setQueryData(['users', userIdStr], shallow);
      }
    },
    onSuccess: async (response, variables, context) => {
      const userId = variables.toString();
      console.log(variables);
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'users') {
          const value: IUser | InfiniteData<IUser[]> | undefined = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(v => v.id.toString() === userId);
            if (obj) {
              const pageIndex = value.pages.findIndex(v => v.includes(obj));
              const index = value.pages[pageIndex].findIndex(v => v.id.toString() === userId);
              const shallow = produce(value, (draft) => {
                draft.pages[pageIndex][index].Followers = [{ id: session?.user?.id as string }];
                if (queryKey[1] === 'followings' || queryKey[1] === 'followers') {
                  draft.pages[0].push(obj);
                }
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            const shallow = produce(value, (draft) => {
              draft.Followers = [{ id: session?.user?.id as string }];
            });
            queryClient.setQueryData(queryKey, shallow);
          }
        }
      })
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
    onSettled() {
    },
  });

  const unfollow = useMutation({
    mutationFn: (userId: string | number) => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}/follow`, {
        credentials: 'include',
        method: 'DELETE',
      });
    },
    onMutate(userId: string | number) {
      const value2: IUser | undefined = queryClient.getQueryData(['users', userIdStr]);
      console.log(value2, '---------------------unfollow');
      if (value2) {
        const shallow = produce(value2, draft => {
          draft.Followers = [];
          // draft._count.Followers -= 1;
        });
        queryClient.setQueryData(['users', userIdStr], shallow);
      }
    },
    onError(error, userId: string | number) {
      const value2: IUser | undefined = queryClient.getQueryData(['users', userIdStr]);
      if (value2) {
        const shallow = produce(value2, draft => {
          draft.Followers = [{ id: session?.user?.id as string }];
          // draft._count.Followers += 1;
        });
        queryClient.setQueryData(['users', userIdStr], shallow);
      }
    },
    onSuccess: async (response, variables, context) => {
      const userId = variables.toString();
      console.log(variables);
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'users') {
          const value: IUser | InfiniteData<IUser[]> | undefined = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(v => v.id.toString() === userId);
            if (obj) {
              const pageIndex = value.pages.findIndex(v => v.includes(obj));
              const index = value.pages[pageIndex].findIndex(v => v.id.toString() === userId);
              const shallow = produce(value, (draft) => {
                draft.pages[pageIndex][index].Followers = [];
                if (queryKey[1] === 'followings' || queryKey[1] === 'followers') {
                  draft.pages[pageIndex] = draft.pages[pageIndex].filter(d => d.id.toString() !== userId);
                }
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value) {
            const shallow = produce(value, (draft) => {
              draft.Followers = [];
            });
            queryClient.setQueryData(queryKey, shallow);
          }
        }
      })
      await queryClient.invalidateQueries({
        queryKey: ['users'],
      });
    },
  });


  if (error) {
    console.dir(error);
    return (
      <>
        <div><Back /></div>
        <div className='flex flex-grow justify-center items-center'>
          <h1>계정이 존재하지 않습니다.</h1>
        </div>
      </>
    )
  }

  if (!user) return null;

  const onFollow: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (followed) {
      unfollow.mutate(user.id);
    } else {
      follow.mutate(user.id);
    }
  };

  return (
    <div className='flex flex-col w-full md:w-[600px] xl:w-[800px] md:max-h-[95dvh] overflow-y-auto overscroll-none'>
      <UserDetailTop user={user} />
      <UserInfo user={user} session={session} />
      {/* <UserDetailPromise userId={userId} /> */}
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'>
        {user?.Posts.map((post: IPost) => (
          <PromiseCard key={post.id} post={post} />
        ))}
      </div>
      <div className='w-full sticky bottom-0 z-10 p-3 bg-white'>
        <Button variant={'default'} className='w-full bg-black z-10' onClick={onFollow}>
          {!followed ? (
            <>
              <UserPlus color='#ffffff' />
              <span className='ml-2 text-white font-extrabold'>친구신청</span>
            </>
          ) : (
            <>
              <UserMinus color='#ffffff' />
              <span className='ml-2 text-white font-extrabold'>친구해제</span>
            </>
          )}
        </Button>
      </div>
    </div>
  )
}