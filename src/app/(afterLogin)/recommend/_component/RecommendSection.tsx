'use client';

import { faker } from '@faker-js/faker';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import style from '../recommend.module.css';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import MainTitle from '@/app/(afterLogin)/_component/MainTitle';

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
    router.push(`/${users[userNumber].id}`)
  }, [router, users, userNumber])
  return (
    <div className='p-2 flex flex-col pt-0 sm:pt-[44px] h-full'>
      <Card className='w-full p-2 relative flex-grow max-h-[711px]' onClickCapture={onClick}>
        <div className="w-full flex justify-center gap-1 absolute top-10 z-10">
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
              <CarouselItem key={index}>
                <img className='w-full h-full block rounded-lg' src={img} alt='image' />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='left-[15px] hidden sm:flex' />
          <CarouselNext className='right-[15px] hidden sm:flex' />
        </Carousel>
        <div className={style.userInfo}>
          <h2 className='text-white font-extrabold text-xl'>{users[userNumber].nickname}, {users[userNumber].age}</h2>
          <p className='text-white font-semibold text-base'>{users[userNumber].distance}km, {users[userNumber].area}</p>
        </div>
      </Card>
      <div className='flex gap-2 mt-3'>
        <Button className='flex-1' variant={'outline'} onClick={onClickPass()}>괜찮아요</Button>
        <Button className='flex-1' onClick={onClickNext()}>좋아요</Button>
      </div>
    </div>
  )
}