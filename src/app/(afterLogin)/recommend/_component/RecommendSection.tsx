'use client';

import { faker } from '@faker-js/faker';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import style from '../recommend.module.css';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageWithPlaceholder from '@/app/(afterLogin)/_component/ImageWithPlaceholder';
import { Skeleton } from '@/components/ui/skeleton';
import { InfiniteData, QueryClient, useMutation, useQuery, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { getUserRecommends } from '../_lib/getUserRecommends';
import { IUserImage } from '@/model/UserImage';
import { Session } from 'next-auth';
import { mbtiCompatibility } from '@/app/(afterLogin)/_constants/constants';
import { IUser } from '@/model/User';
import { produce } from 'immer';
import { Heart } from 'lucide-react';

type Props = { session: Session | null, mbtiList: string[] };

export default function RecommendSection({ session, mbtiList }: Props) {

  // console.log(mbtiList, '------------------------------- mbtiList');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  const router = useRouter();
  const { data: users, error } = useSuspenseQuery({
    queryKey: ['users', 'recommends'],
    queryFn: () => getUserRecommends(mbtiList),
    staleTime: 0,
    gcTime: 0,
  }) 
  const myMbti = useMemo(() => (session?.user as IUser)?.mbti.toUpperCase(), [session?.user]);
  const userMbti = useMemo(() => (users[userNumber] as IUser)?.mbti?.toUpperCase(), [userNumber, users]);
  const mbtiData = mbtiCompatibility[myMbti];
  const queryClient = useQueryClient();
  const isLiked = !!(users[userNumber] as IUser)?.Followers.find(d => d.id.toString() === session?.user?.id)


  const follow = useMutation({
    mutationFn: (userId: string | number) => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}/follow`, {
        method: 'PATCH',
        credentials: 'include',
      });
    },
    onError(error, userId: string | number) {
      console.error('게시물 업로드 중 에러 발생', error);
    },
    onSuccess: async (response, variables, context) => {
      const userId = variables.toString();
      console.log(variables);
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'users') {
          const value: IUser | InfiniteData<IUser[]> | undefined | IUser[] = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(v => v.id.toString() === userId);
            if (obj) {
              const pageIndex = value.pages.findIndex(v => v.includes(obj));
              const index = value.pages[pageIndex].findIndex(v => v.id.toString() === userId);
              const shallow = produce(value, (draft) => {
                draft.pages[pageIndex][index].Followers = [{ id: session?.user?.id as string }];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value && Array.isArray(value)) {
            const index = value.findIndex(v => v.id.toString() === userId);
            const shallow = produce(value, (draft) => {
              draft[index].Followers = [{ id: session?.user?.id as string }];
            });
            queryClient.setQueryData(queryKey, shallow);
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
      if (userNumber === users.length) return;
      setUserNumber(prev => prev + 1);
      api?.scrollTo(0, true);
    },
  });

  const unfollow = useMutation({
    mutationFn: (userId: string | number) => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${userId}/follow`, {
        credentials: 'include',
        method: 'DELETE',
      });
    },
    onError(error, userId: string | number) {
      console.error('게시물 업로드 중 에러 발생', error);
    },
    onSuccess: async (response, variables, context) => {
      const userId = variables.toString();
      console.log(variables);
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.forEach((queryKey) => {
        if (queryKey[0] === 'users') {
          const value: IUser | InfiniteData<IUser[]> | undefined | IUser[] = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            const obj = value.pages.flat().find(v => v.id.toString() === userId);
            if (obj) {
              const pageIndex = value.pages.findIndex(v => v.includes(obj));
              const index = value.pages[pageIndex].findIndex(v => v.id.toString() === userId);
              const shallow = produce(value, (draft) => {
                draft.pages[pageIndex][index].Followers = [];
              });
              queryClient.setQueryData(queryKey, shallow);
            }
          } else if (value && Array.isArray(value)) {
            const index = value.findIndex(v => v.id.toString() === userId);
            const shallow = produce(value, (draft) => {
              draft[index].Followers = [];
            });
            queryClient.setQueryData(queryKey, shallow);
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
    onSettled() {
      if (userNumber === users.length) return;
      setUserNumber(prev => prev + 1);
      api?.scrollTo(0, true);
    },
  });


  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    })
  }, [api]);

  const handleDotClick = useCallback((index: any) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);
  
  const onClickPass = useCallback(() => () => {
    if (userNumber === users.length) return;
    if (!isLiked) {
      setUserNumber(prev => prev + 1);
      api?.scrollTo(0, true);
      return;
    }
    unfollow.mutate(users[userNumber].id);
  }, [api, isLiked, unfollow, userNumber, users]);

  const onClickNext = useCallback(() => () => {
    if (userNumber === users.length) return;
    if (isLiked) {
      setUserNumber(prev => prev + 1);
      api?.scrollTo(0, true);
      return;
    }
    follow.mutate(users[userNumber].id);
  }, [userNumber, users, isLiked, follow, api]);

  const onClick = useCallback(() => {
    router.push(`/tester/${users[userNumber].id}`);
  }, [router, users, userNumber]);


  if (error) {
    console.error(error, '-------------------------------------------------error');
    return null;
  }

  return (
    <div className='p-2 flex flex-col pt-0 sm:pt-[44px] h-full'>
      {users[userNumber] ? (
        <>
          <Card className='w-full p-2 relative flex-grow max-h-[711px] bg-black'>
            <div className="w-full flex justify-center gap-1 absolute top-10 z-20">
              {users[userNumber]?.Images.length > 1 && users[userNumber]?.Images.map((_: IUserImage, index: number) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full ${current === index + 1 ? 'bg-black' : 'bg-slate-50'}`}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </div>
            <Carousel opts={{loop: true, dragThreshold: 5 }} setApi={setApi} className={style.carousel}>
              <CarouselContent>
                {users[userNumber].Images.map((img: IUserImage, index: number) => (
                  <CarouselItem key={index} className='aaa'>
                    {/* <ImageWithPlaceholder src={`${img}`} /> */}
                    <div className='relative h-full'>
                      {/* <Skeleton className='w-full h-full absolute top-0 left-0' /> */}
                      {/* <img className='w-full h-full block rounded-lg absolute top-0 left-0 z-10' src={img} alt='image' /> */}
                      <ImageWithPlaceholder src={img.src} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {users[userNumber].Images.length > 1 && <>
                <CarouselPrevious className='left-[15px] hidden sm:flex z-20' />
                <CarouselNext className='right-[15px] hidden sm:flex z-20' />
              </>}
            </Carousel>
            <div className={style.userInfo} onClickCapture={onClick}>
              <h2 className='text-white font-extrabold text-xl'>{myMbti}</h2>
              <h2 className='text-white font-extrabold text-xl'>궁합 {mbtiData[userMbti]}%</h2>
              <h2 className='text-white font-extrabold text-xl'>{users[userNumber].nickname}, {users[userNumber].age}</h2>
              <p className='text-white font-semibold text-base'>{users[userNumber].region}</p>
            </div>
            {isLiked && <Heart className='absolute top-[10px] right-[10px] text-white stroke-2' />}
          </Card>
          <div className='flex gap-2 mt-3'>
            <Button className='flex-1' variant={'outline'} onClick={onClickPass()}>괜찮아요</Button>
            <Button className='flex-1 bg-black' onClick={onClickNext()}>좋아요</Button>
          </div>
        </>
      ) : <div className='flex items-center justify-center h-full'>다음 추천을 기다려주세요.</div>}
    </div>
  )
}