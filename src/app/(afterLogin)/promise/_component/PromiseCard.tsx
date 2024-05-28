import { IPost } from '@/model/Post';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HandMetal, MapPin } from 'lucide-react';
import style from './promiseSection.module.css';
import ImageWithPlaceholder from '@/app/(afterLogin)/_component/ImageWithPlaceholder';
import PromiseCardLink from './PromiseCardLink';
import PromiseCardDropdown from './PromiseCardDropdown';
import relativeTime from "dayjs/plugin/relativeTime";
import 'dayjs/locale/ko';
import dayjs from "dayjs";
dayjs.locale('ko');
dayjs.extend(relativeTime)

export default function PromiseCard({ promise }: { promise: IPost }) {
  return (
    <Card key={promise.id} className='flex flex-col justify-between min-h-[400px] relative bg-black'>
      {promise.Images?.length > 0 && <ImageWithPlaceholder src={`${promise.Images[0]}`} />}
      <div className={style.promiseContent}>
        <div className='flex justify-between'>
          <PromiseCardLink promise={promise} />
          <PromiseCardDropdown promise={promise} />
        </div>
        <p className='font-extrabold text-xl text-white text-center'>{promise.content}</p>
        <div>
          <span className='text-white font-semibold text-sm flex items-center'>
            <MapPin color='#ffffff' className='mr-1' />{promise.User.area} · {dayjs(promise.createdAt).fromNow()}
          </span>
          <Button variant={'outline'} className='flex w-full mt-1'><span className='mr-2'>궁금해요</span><HandMetal /></Button>
        </div>
      </div>
    </Card>
  )
}