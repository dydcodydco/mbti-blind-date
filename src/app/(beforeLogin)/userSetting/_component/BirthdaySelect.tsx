'useClient';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { useContext, useEffect, useState } from 'react';
import style from './birthdaySelect.module.css';
import { setUserContext } from './setUserProvider';

export default function Birthday() {
  const { setBirthdayYear, setBirthdayMonth, setBirthdayDay } = useContext(setUserContext);
  
  const [yearApi, setYearApi] = useState<CarouselApi>();
  const [monthApi, setMonthApi] = useState<CarouselApi>();
  const [dayApi, setDayApi] = useState<CarouselApi>();
  const birthdayYears = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - 20 - i);
  const birthdayMonths = Array.from({ length: 12 }, (_, i) => i + 1);
  const birthdayDays = Array.from({ length: 31 }, (_, i) => i + 1);

  useEffect(() => {
    if (yearApi) {
      yearApi.on("select", () => {
        setBirthdayYear(birthdayYears[yearApi.selectedScrollSnap()]);
      })
    }
    if (monthApi) {
      monthApi.on("select", () => {
        setBirthdayMonth(birthdayMonths[monthApi.selectedScrollSnap()]);
      })
    }
    if (dayApi) {
      dayApi.on("select", () => {
        setBirthdayDay(birthdayDays[dayApi.selectedScrollSnap()]);
      })
    }
  }, [yearApi, monthApi, dayApi, birthdayYears, birthdayMonths, birthdayDays, setBirthdayYear, setBirthdayMonth, setBirthdayDay]);

  return (
    <div className='flex justify-evenly w-full'>
      <div>
        <Carousel opts={{skipSnaps: true, loop: true}} orientation="vertical" className={style.carousel} setApi={setYearApi}>
          <CarouselContent className='h-[170px]'>
            {birthdayYears.map((year) => (
              <CarouselItem key={year} className='basis-[30%] pt-[20px]'>
                <div>
                  <span>{year}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div>
        <Carousel opts={{skipSnaps: true, loop: true}} orientation="vertical" className={style.carousel} setApi={setMonthApi}>
          <CarouselContent className='h-[170px]'>
            {birthdayMonths.map((year) => (
              <CarouselItem key={year} className="basis-[30%] pt-[20px]">
                <div>
                  <span>{year}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div>
        <Carousel opts={{skipSnaps: true, loop: true}} orientation="vertical" className={style.carousel} setApi={setDayApi}>
          <CarouselContent className='h-[170px]'>
            {birthdayDays.map((year) => (
              <CarouselItem key={year} className='basis-[30%] pt-[20px]'>
                <div>
                  <span>{year}</span>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  )
}