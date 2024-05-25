'use client';

import { Button } from '@/components/ui/button'
import {
  Card,
} from "@/components/ui/card"
import { User } from 'lucide-react'
import { ChangeEventHandler, useCallback, useContext, useState } from 'react'
import { setUserContext } from './SetUserProvider2'
import { SubmitHandler } from 'react-hook-form';

export default function ImageSelect() {
  const { nickname, setProgress, userImages, setUserImages } = useContext(setUserContext);
  const [tempImages, setTempImages] = useState<File[]>([]);

  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    // console.log(e.target.files);
    // [].forEach.call(e.target.files, (d) => {
      //   console.log(d);
      // })
      
    const imageForm = new FormData();
    if (e.target.files) {
      Array.from(e.target.files).forEach(d => {
        console.log(d);
        imageForm.append('image', d);
      })
    }

    // if (data.target.files) {
    //   setTempImages((prev) => [...prev, ...data.target.files]);
    // }
  }, []);
  return (
    <div className='flex flex-col flex-grow pt-5'>
      <h1>{nickname}님의 사진을 보여주세요.</h1>
      <div className='flex-grow mt-3'>
        <input id='image' type="file" multiple hidden accept='image/*' onChange={onChange} />
        <label htmlFor="image" className='grid grid-cols-3 gap-2 items-start'>
          {Array(6).fill(0).map((d, i) => (
            <Card className='h-[100px] flex justify-center items-center' key={i}>
              <User size={40} />
            </Card>
          ))}
        </label>
      </div>

      <Button className='w-full' onClick={() => setProgress(90)}>다음</Button>
    </div>
  )
}