'use client';

import { useCallback, useContext, useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input";
import BirthdaySelect from './BirthdaySelect';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import MbtiSelect from './MbtiSelect';
import { setUserContext } from './setUserProvider';
import style from '../userSetting.module.css'
import ReligionSelect from './ReligionSelect';

export default function SetUser() {
  const {
    progress, setProgress, gender, setGender, nickname, setNickname, birthdayYear,
    birthdayMonth, birthdayDay, regionArr, region, setRegion, tallArr, tall, setTall,
  } = useContext(setUserContext);
  
  const onClickBirthday = useCallback(() => {
    console.log(`${birthdayYear}-${birthdayMonth}-${birthdayDay}`);
    setProgress(20);
  }, [birthdayYear, birthdayMonth, birthdayDay, setProgress]);

  const [regionApi, setRegionApi] = useState<CarouselApi>();
  useEffect(() => {
    if (regionApi) {
      regionApi.on("select", () => {
        setRegion(regionArr[regionApi.selectedScrollSnap()]);
      })
    }
  }, [regionApi, regionArr, setRegion]);

  const [tallApi, setTallApi] = useState<CarouselApi>();
  useEffect(() => {
    if (tallApi) {
      tallApi.on("select", () => {
        setTall(tallArr[tallApi.selectedScrollSnap()]);
      })
    }
  }, [tallApi, setTall, tallArr]);

  return (
    <>
      {progress < 10 && <div className='pt-5 flex flex-col flex-grow'>
        <h1>성별을 선택해주세요.</h1>
        <div className='flex justify-between mt-3 flex-grow'>
          <Button variant={gender === 'man' ? 'default' : 'outline'} onClick={() => setGender('man')}>남자</Button>
          <Button variant={gender === 'woman' ? 'default' : 'outline'} onClick={() => setGender('woman')}>여자</Button>
        </div>
        <Button className='w-full' onClick={() => setProgress(10)} disabled={!gender}>다음</Button>
      </div>}

      <div className={`pt-5 flex flex-col flex-grow ${progress === 10 ? '' : 'hidden'}`}>
        <h1>생일을 선택해주세요.</h1>
        <div className='flex flex-grow'>
          <BirthdaySelect />
        </div>
        <Button className='w-full' onClick={onClickBirthday}>다음</Button>
      </div>

      {progress === 20 && <div className='pt-5 flex flex-col flex-grow'>
        <h1>닉네임을 정해주세요.</h1>
        <div className='flex justify-between mt-3 flex-grow'>
          <Input
            type="text" placeholder="nickname" value={nickname}
            onChange={(e) => setNickname(e.target.value)} />
        </div>
        <Button className='w-full' onClick={() => setProgress(30)} disabled={!nickname}>다음</Button>
      </div>}

      <div className={`pt-5 flex flex-col flex-grow ${progress === 30 ? '' : 'hidden'}`}>
        <h1>{nickname}님이 주로 활동하는 지역은 어디인가요?</h1>
        <div className='flex justify-center mt-3 flex-grow'>
          <div className='w-full'>
            <Carousel opts={{skipSnaps: true, loop: true}} orientation="vertical" className={style.carousel} setApi={setRegionApi}>
              <CarouselContent className='h-[170px]'>
                {regionArr.map((region) => (
                  <CarouselItem key={region} className='basis-[30%] pt-[20px]'>
                    <div>{region}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <Button className='w-full' onClick={() => setProgress(40)} disabled={!region}>다음</Button>
      </div>

      <div className={`pt-5 flex flex-col flex-grow ${progress === 40 ? '' : 'hidden'}`}>
        <h1>{nickname}님의 키를 알려주세요.</h1>
        <div className='flex justify-center mt-3 flex-grow'>
          <div className='w-full'>
            <Carousel opts={{skipSnaps: true, loop: true, startIndex: 20}} orientation="vertical" className={style.carousel} setApi={setTallApi}>
              <CarouselContent className='h-[170px]'>
                {tallArr.map((tall) => (
                  <CarouselItem key={tall} className='basis-[30%] pt-[20px]'>
                    <div>{tall}</div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        <Button className='w-full' onClick={() => setProgress(50)} disabled={!tall}>다음</Button>
      </div>

      {progress === 50 && <ReligionSelect />}



      {progress === 80 && <MbtiSelect />}
    </>
  )
}