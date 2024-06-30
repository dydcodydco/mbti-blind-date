'use client';

import { Button } from '@/components/ui/button'
import {
  Card,
} from "@/components/ui/card"
import { User } from 'lucide-react'
import { ChangeEventHandler, useCallback, useContext, useState } from 'react'
import { setUserContext } from './SetUserProvider2'
import { SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function ImageSelect() {
  const { nickname, setProgress, setUserImages } = useContext(setUserContext);
  const router = useRouter();
  const [preview, setPreview] = useState<Array<{dataUrl: string, file: File} | null>>([]);

  const onUpload: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    e.preventDefault();
    if (e.target.files) {
      console.log(Array.from(e.target.files));
      Array.from(e.target.files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(prevPreview => {
            const prev = [...prevPreview, { dataUrl: reader.result as string, file }];
            // prev[index] = { dataUrl: reader.result as string, file };
            return prev;
          })
        }
        reader.readAsDataURL(file);
      })
    }
  }, []);

  const onRemoveImage = useCallback((index: number) => () => {
    setPreview(prev => {
      const preview = [...prev].filter((d, i) => i !== index);
      // preview[index] = null;
      return preview;
    });
  }, []);

  const nextStep = useCallback(() => {
    if (preview) {
      const images = preview.map(d => d!.file)
      setUserImages(images);
      setProgress(90);
    }
  }, [preview, setProgress, setUserImages])
  return (
    <div className='flex flex-col flex-grow pt-5'>
      <h1>{nickname}님의 사진을 보여주세요.</h1>
      <div className='flex-grow mt-3'>
        <label className='grid grid-cols-3 gap-2 items-start'>
          {Array(6).fill(0).map((d, i) => (
            preview[i] ? (
              <Card className='h-[160px] flex justify-center items-center' key={i}>
                <Image src={preview[i]?.dataUrl as any}
                  width={160} height={160} alt='image' className='rounded-lg max-h-full max-w-full w-full'
                  onClick={onRemoveImage(i)} />
              </Card>
            ) : (
              <Card className='h-[160px] flex justify-center items-center' key={i}>
                <User size={40} />
              </Card>)
          ))}
        </label>
        <div className='mt-2'>
          <Button className='w-full'>
            <label htmlFor="image" className='flex w-full h-full justify-center items-center'>이미지 추가</label>
          </Button>
          <input id='image' type="file" multiple hidden accept='image/*' onChange={onUpload} />
        </div>
      </div>

      {/* <Button className='w-full' disabled={preview.length === 0} onClick={nextStep}>다음</Button> */}
      <Button className='w-full' onClick={nextStep}>다음</Button>
    </div>
  )
}