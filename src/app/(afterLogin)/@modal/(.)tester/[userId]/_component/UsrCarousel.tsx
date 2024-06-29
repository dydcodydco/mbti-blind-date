'use client';
import { useCallback, useEffect, useState } from 'react';
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import ImageWithPlaceholder from '@/app/(afterLogin)/_component/ImageWithPlaceholder';
import { IUser } from '@/model/User';

export default function UserCaousel({user}: {user: IUser}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = useCallback((index: any) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

  console.log(user, '------------------------------------UserCaousel user');
  if (!user.Images || user.Images.length === 0) {
    return null;
  }

  return (
    <div className='relative'>
      <div className="w-full flex justify-center gap-1 absolute bottom-4 z-10">
        {user.Images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full ${current === index + 1 ? 'bg-black' : 'bg-slate-50'}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
      <Carousel opts={{ loop: true }} setApi={setApi}>
        <CarouselContent>
          {user.Images.map((img, index) => (
            <CarouselItem key={index}>
              <div className='h-[400px] w-[100%] relative'>
                {/* <Skeleton className='w-full h-full absolute top-0 left-0' /> */}
                {/* <img className='w-full h-full block rounded-lg absolute top-0 left-0 z-10' src={img} alt='image' /> */}
                <ImageWithPlaceholder src={img.src} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='left-[15px] hidden sm:flex' />
        <CarouselNext className='right-[15px] hidden sm:flex' />
      </Carousel>
    </div>
  );
}
