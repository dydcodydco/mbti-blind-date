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

export default function RecommendSection() {
  faker.seed(123);
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap() + 1);
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    })
  }, [api]);

  const handleDotClick = (index: any) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const createDummyUser = () => {
    return {
      id: faker.string.nanoid(10),
      nickname: faker.internet.userName(),
      age: faker.number.int({ min: 20, max: 50 }),
      distance: faker.number.int({ min: 5, max: 100 }),
      area: faker.location.city(),
      image: [
        faker.image.urlLoremFlickr({ category: 'cat' }),
        faker.image.urlLoremFlickr({ category: 'cat' }),
        faker.image.urlLoremFlickr({ category: 'cat' }),
      ],
      mbti: faker.helpers.arrayElement([{mbti: 'ESFP', score: 100}, {mbti: 'ESFP', score: 90}, {mbti: 'ESFP', score: 80}])
    }
  }
  const users = faker.helpers.multiple(createDummyUser, { count: 5 });

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
          {users[userNumber].image.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${current === index + 1 ? 'bg-black' : 'bg-slate-50'}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <Carousel opts={{loop: true, dragThreshold: 5 }} setApi={setApi} className={style.carousel}>
          <CarouselContent>
            {users[userNumber].image.map((img, index) => (
              <CarouselItem key={index} onClickCapture={onClick} className='aaa'>
                {/* <ImageWithPlaceholder src={`${img}`} /> */}
                <div className='relative h-full'>
                  {/* <Skeleton className='w-full h-full absolute top-0 left-0' /> */}
                  {/* <img className='w-full h-full block rounded-lg absolute top-0 left-0 z-10' src={img} alt='image' /> */}
                  <ImageWithPlaceholder src={img} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-[15px] hidden sm:flex z-20' />
          <CarouselNext className='right-[15px] hidden sm:flex z-20' />
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