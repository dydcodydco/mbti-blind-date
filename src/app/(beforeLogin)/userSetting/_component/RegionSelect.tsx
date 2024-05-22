import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useCallback, useContext, useEffect, useState } from 'react';
import { setUserContext } from './SetUserProvider';
import style from '../userSetting.module.css'

export default function RegionSelect() {
  const { setRegion, regionArr, nickname, progress, setProgress, region } = useContext(setUserContext);
  const [regionApi, setRegionApi] = useState<CarouselApi>();
  useEffect(() => {
    if (regionApi) {
      regionApi.on("select", () => {
        setRegion(regionArr[regionApi.selectedScrollSnap()]);
      })
    }
  }, [regionApi, regionArr, setRegion]);

  useEffect(() => {
    if (regionApi && region) {
      regionApi.scrollTo(regionArr.findIndex(d => d === region));
    }
  }, [regionApi, regionArr, region]);

  const onClickRegion = useCallback(() => {
    setProgress(40);
    console.log('지역', region);
  }, [setProgress, region]);
  return (
    <div className={`pt-5 flex flex-col flex-grow`}>
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
      <Button className='w-full' onClick={onClickRegion} disabled={!region}>다음</Button>
    </div>
  )
}