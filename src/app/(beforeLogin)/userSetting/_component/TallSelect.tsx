import { Button } from '@/components/ui/button';
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { useCallback, useContext, useEffect, useState } from 'react';
import { setUserContext } from './SetUserProvider';
import style from '../userSetting.module.css'

export default function TallSelect() {
  const { progress, nickname, tallArr, setProgress, tall, setTall } = useContext(setUserContext);
  const [tallApi, setTallApi] = useState<CarouselApi>();
  useEffect(() => {
    if (tallApi) {
      tallApi.on("select", () => {
        setTall(tallArr[tallApi.selectedScrollSnap()]);
      });
    }
  }, [tallApi, setTall, tallArr]);
  
  useEffect(() => {
    if (tallApi && tall) {
      tallApi.scrollTo(tallArr.findIndex(d => d === tall));
    }
  }, [tallApi, tall, tallArr]);

  const onClickTall = useCallback(() => {
    setProgress(50);
    console.log('키', tall);
  }, [setProgress, tall]);
  return (
    <div className={`pt-5 flex flex-col flex-grow`}>
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
      <Button className='w-full' onClick={onClickTall} disabled={!tall}>다음</Button>
    </div>
  )
}