'use client';

import { faker } from '@faker-js/faker';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import style from '../recommend.module.css';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ImageWithPlaceholder from '@/app/(afterLogin)/_component/ImageWithPlaceholder';
import { Skeleton } from '@/components/ui/skeleton';
import { useQuery } from '@tanstack/react-query';
import { getUserRecommends } from '../_lib/getUserRecommends';
import { IUserImage } from '@/model/UserImage';

export default function RecommendSection() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  const router = useRouter();
  const { data: users } = useQuery({
    queryKey: ['users', 'recommends'],
    queryFn: getUserRecommends,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  }) 
  
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
    setUserNumber(prev => prev + 1);
    api?.scrollTo(0, true);
  }, [api, userNumber, users]);

  const onClickNext = useCallback(() => () => {
    if (userNumber === users.length) return;
    setUserNumber(prev => prev + 1);
    api?.scrollTo(0, true);
  }, [api, userNumber, users]);

  const onClick = useCallback(() => {
    router.push(`/${users[userNumber].id}`);
  }, [router, users, userNumber])
  return (
    <div className='p-2 flex flex-col pt-0 sm:pt-[44px] h-full'>
      <Card className='w-full p-2 relative flex-grow max-h-[711px]'>
        <div className="w-full flex justify-center gap-1 absolute top-10 z-20">
          {users[userNumber].Images.length > 1 && users[userNumber].Images.map((_: IUserImage, index: number) => (
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
              <CarouselItem key={index} onClickCapture={onClick} className='aaa'>
                {/* <ImageWithPlaceholder src={`${img}`} /> */}
                <div className='relative h-full'>
                  {/* <Skeleton className='w-full h-full absolute top-0 left-0' /> */}
                  {/* <img className='w-full h-full block rounded-lg absolute top-0 left-0 z-10' src={img} alt='image' /> */}
                  <ImageWithPlaceholder src={img.link} />
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
          <h2 className='text-white font-extrabold text-xl'>{users[userNumber].mbti.mbti}, 궁합 {users[userNumber].mbti.score}%</h2>
          <h2 className='text-white font-extrabold text-xl'>{users[userNumber].nickname}, {users[userNumber].age}</h2>
          <p className='text-white font-semibold text-base'>{users[userNumber].distance}km, {users[userNumber].area}</p>
        </div>
      </Card>
      <div className='flex gap-2 mt-3'>
        <Button className='flex-1' variant={'outline'} onClick={onClickPass()}>괜찮아요</Button>
        <Button className='flex-1 bg-black' onClick={onClickNext()}>좋아요</Button>
      </div>
    </div>
  )
}