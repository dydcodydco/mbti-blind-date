'use client';

import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import style from './userSetting.module.css';
import Title from '../_component/Title';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import { ArrowLeft } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Page () {
  const {handleSubmit, register, formState: {errors}} = useForm({defaultValues: {
    ie: "",
    sn: '',
    ft: '',
    pj: '',
  }});
  const [mbti, setMbti] = useState('');
  const [progress, setProgress] = useState(0);
  const [gender, setGender] = useState('');
  const [yearApi, setYearApi] = useState<CarouselApi>();
  const [monthApi, setMonthApi] = useState<CarouselApi>();
  const [dayApi, setDayApi] = useState<CarouselApi>();
  const birthdayYears = Array.from({ length: 30 }, (_, i) => new Date().getFullYear() - 20 - i);
  const birthdayMonths = Array.from({ length: 12 }, (_, i) => i + 1);
  const birthdayDays = Array.from({ length: 31 }, (_, i) => i + 1);
  const [birthdayYear, setBirthdayYear] = useState(birthdayYears[0]);
  const [birthdayMonth, setBirthdayMonth] = useState(birthdayMonths[0]);
  const [birthdayDay, setBirthdayDay] = useState(birthdayDays[0]);
  const [nickname, setNickname] = useState('');

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
  }, [yearApi, monthApi, dayApi, birthdayYears, birthdayMonths, birthdayDays]);

  const onClickBirthday = useCallback(() => {
    console.log(`${birthdayYear}-${birthdayMonth}-${birthdayDay}`);
    setProgress(40);
  }, [birthdayYear, birthdayMonth, birthdayDay]);

  const onClickBack = useCallback(() => {
    switch (progress) {
      case 20:
        setProgress(0);
        break;
      case 40:
        setProgress(20);
        break;
      case 60:
        setProgress(40);
        break;
      case 80:
        setProgress(60);
        break;
    }
  }, [progress]);

  const onMbtiSubmit = useCallback((data: any) => {
    console.log(data);
    const { ie, sn, ft, pj } = data;
    setMbti(`${ie}${sn}${ft}${pj}`);
    setProgress(60);
  }, []);

  return (
    <div className={style.userSetting}>
      <Button variant="outline" size="icon" className='absolute left-2 top-[30px] w-[30px] h-[30px]' onClick={onClickBack}>
        <ArrowLeft className="h-4 w-4"  />
      </Button>
      <Title />
      <Progress value={progress}/>

      {progress < 20 && <div className='pt-5 flex flex-col flex-grow'>
        <h1>성별을 선택해주세요. {!!gender}</h1>
        <div className='flex justify-between mt-3 flex-grow'>
          <Button variant={gender === 'man' ? 'default' : 'outline'} onClick={() => setGender('man')}>남자</Button>
          <Button variant={gender === 'woman' ? 'default' : 'outline'} onClick={() => setGender('woman')}>여자</Button>
        </div>
        <Button className='w-full' onClick={() => setProgress(20)} disabled={!gender}>다음</Button>
      </div>}

      <div className={`pt-5 flex flex-col flex-grow ${20 <= progress && progress < 40 ? '' : 'hidden'}`}>
        <h1>생일을 선택해주세요.</h1>
          <div className='flex flex-grow'>
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
          </div>
        <Button className='w-full' onClick={onClickBirthday}>다음</Button>
      </div>

      {40 <= progress && progress < 60 && <div className='pt-5 flex flex-col flex-grow'>
        <h1>닉네임을 정해주세요. {!!gender}</h1>
        <div className='flex justify-between mt-3 flex-grow'>
          <Input
            type="text" placeholder="nickname" value={nickname}
            onChange={(e) => setNickname(e.target.value)} />
        </div>
        <Button className='w-full' onClick={() => setProgress(60)} disabled={!nickname}>다음</Button>
      </div>}

      {60 <= progress && progress < 80 && <div className='pt-5 flex flex-col flex-grow'>
        <h1>{nickname}님의 개인정보를 선택해주세요. {!!gender}</h1>
        <div className='flex justify-between mt-3 flex-grow'>
          
        </div>
        <Button className='w-full' onClick={() => setProgress(60)} disabled={!nickname}>다음</Button>
      </div>}

      {80 <= progress && progress < 100 && <form className={style.mbtiForm} onSubmit={handleSubmit(onMbtiSubmit)}>
        <h1>MBTI를 선택해주세요.</h1>
        <div className='flex-grow mt-3'>
          <div>
            <h2>외향형/내향형</h2>
            <div>
              <input className={style.mbtiInput} id='e' type="radio" value='e' {...register('ie', {required: true})} />
              <label htmlFor='e'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z"/></svg>
                  </div>
                </Button>
              </label>
              <input className={style.mbtiInput} id='i' type="radio" value='i' {...register('ie', { required: true })} />
              <label htmlFor='i'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96h96V416H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H192V96h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H160 32z"/></svg>
                  </div>
                </Button>
              </label>
            </div>
          </div>

          <div>
            <h2>감각형/직관형</h2>
            <div>
              <input className={style.mbtiInput} id='s' type="radio" value='s' {...register('sn', {required: true})} />
              <label htmlFor='s'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M99.1 105.4C79 114 68.2 127.2 65.2 144.8c-2.4 14.1-.7 23.2 2 29.4c2.8 6.3 7.9 12.4 16.7 18.6c19.2 13.4 48.3 22.1 84.9 32.5c1 .3 1.9 .6 2.9 .8c32.7 9.3 72 20.6 100.9 40.7c15.7 10.9 29.9 25.5 38.6 45.1c8.8 19.8 10.8 42 6.6 66.3c-7.3 42.5-35.3 71.7-71.8 87.3c-35.4 15.2-79.1 17.9-123.7 10.9l-.2 0 0 0c-24-3.9-62.7-17.1-87.6-25.6c-4.8-1.7-9.2-3.1-12.8-4.3C5.1 440.8-3.9 422.7 1.6 405.9s23.7-25.8 40.5-20.3c4.9 1.6 10.2 3.4 15.9 5.4c25.4 8.6 56.4 19.2 74.4 22.1c36.8 5.7 67.5 2.5 88.5-6.5c20.1-8.6 30.8-21.8 33.9-39.4c2.4-14.1 .7-23.2-2-29.4c-2.8-6.3-7.9-12.4-16.7-18.6c-19.2-13.4-48.3-22.1-84.9-32.5c-1-.3-1.9-.6-2.9-.8c-32.7-9.3-72-20.6-100.9-40.7c-15.7-10.9-29.9-25.5-38.6-45.1c-8.8-19.8-10.8-42-6.6-66.3l31.5 5.5L2.1 133.9C9.4 91.4 37.4 62.2 73.9 46.6c35.4-15.2 79.1-17.9 123.7-10.9c13 2 52.4 9.6 66.6 13.4c17.1 4.5 27.2 22.1 22.7 39.2s-22.1 27.2-39.2 22.7c-11.2-3-48.1-10.2-60.1-12l4.9-31.5-4.9 31.5c-36.9-5.8-67.5-2.5-88.6 6.5z"/></svg>
                  </div>
                </Button>
              </label>
              <input className={style.mbtiInput} id='n' type="radio" value='n' {...register('sn', {required: true})} />
              <label htmlFor='n'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M21.1 33.9c12.7-4.6 26.9-.7 35.5 9.6L320 359.6V64c0-17.7 14.3-32 32-32s32 14.3 32 32V448c0 13.5-8.4 25.5-21.1 30.1s-26.9 .7-35.5-9.6L64 152.4V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 50.5 8.4 38.5 21.1 33.9z" /></svg>
                    </div>
                </Button>
              </label>
            </div>
          </div>

          <div>
            <h2>사고형/감정형</h2>
            <div>
              <input className={style.mbtiInput} id='t' type="radio" value='t' {...register('ft', {required: true})} />
              <label htmlFor='t'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96H160V448c0 17.7 14.3 32 32 32s32-14.3 32-32V96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32H192 32z" /></svg>
                    </div>
                </Button>
              </label>
              <input className={style.mbtiInput} id='f' type="radio" value='f' {...register('ft', { required: true })} />
              <label htmlFor='f'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M64 32C28.7 32 0 60.7 0 96V256 448c0 17.7 14.3 32 32 32s32-14.3 32-32V288H224c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V96H288c17.7 0 32-14.3 32-32s-14.3-32-32-32H64z"/></svg>
                    </div>
                </Button>
              </label>
            </div>
          </div>

          <div>
            <h2>판단형/인식형</h2>
            <div>
              <input className={style.mbtiInput} id='j' type="radio" value='j' {...register('pj', {required: true})} />
              <label htmlFor='j'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M288 32c17.7 0 32 14.3 32 32V320c0 88.4-71.6 160-160 160S0 408.4 0 320V288c0-17.7 14.3-32 32-32s32 14.3 32 32v32c0 53 43 96 96 96s96-43 96-96V64c0-17.7 14.3-32 32-32z" /></svg>
                    </div>
                </Button>
              </label>
              <input className={style.mbtiInput} id='p' type="radio" value='p' {...register('pj', {required: true})} />
              <label htmlFor='p'>
                <Button variant="outline" asChild>
                  <div className='flex w-full h-auto bg-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M0 96C0 60.7 28.7 32 64 32h96c88.4 0 160 71.6 160 160s-71.6 160-160 160H64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V320 96zM64 288h96c53 0 96-43 96-96s-43-96-96-96H64V288z" /></svg>
                    </div>
                </Button>
              </label>
            </div>
          </div>
        </div>

        <Button type="submit" className='w-full mt-6'>다음</Button>
      </form>}
    </div>
  )
}