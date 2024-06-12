'use client';

import Modal from '@/app/(afterLogin)/_component/Modal';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { ImageUp, X } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { ChangeEventHandler, useCallback, useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { produce } from 'immer';
import { IPost } from '@/model/Post';

type FormProps = {
  content: string;
  imageFiles: FileList;
}

export default function PromiseFormModal() {
  const { register, setFocus, handleSubmit, reset, formState: { errors, isValid } } = useForm<FormProps>();
  const { ref, onChange, ...rest } = register('imageFiles');
  const router = useRouter();
  const [preview, setPreview] = useState<Array<{ dataUrl: string, file: File } | null>>([]);
  const queryClient = useQueryClient();

  useEffect(() => {
    setFocus('content');
  }, [setFocus]);

  const mutation = useMutation({
    mutationFn: async (data: FormProps) => {
      const formData = new FormData;
      formData.append('content', data.content);
      preview.forEach(d => {
        d && formData.append('images', d?.file);
      })
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post`, {
        method: 'post',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: data.content!,
          region: '서울',
        }),
      })
    },
    async onSuccess(response, variable, context) {
      setPreview([]);
      reset();
      console.log(response, '--------------글 작성 후 프로미스');
      const newPost = await response.json();
      console.log(newPost, '--------------글 작성 정보');
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.map((queryKey) => {
        if (queryKey[0] === 'posts') {
          console.log(queryKey[0]);
          const value: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(queryKey);
          if (value && 'pages' in value) {
            console.log('----------value', value);
            const shallow = produce(value, draft => {
              draft.pages[0].unshift(newPost);
            })
            queryClient.setQueryData(queryKey, shallow);
          }
        }
      })
    },
    onError(error) {
      console.error('게시물 업로드 중 에러 발생', error);
    },
    onSettled() {
      router.back();
    }
  })
  
  const onSubmit: SubmitHandler<FormProps> = useCallback(data => {
    mutation.mutate(data);
  }, [mutation]);

  const onClickClose = useCallback(() => {
    router.back();
  }, [router]);

  const onUpload: ChangeEventHandler<HTMLInputElement> = useCallback((e) => {
    e.preventDefault();
    if (e.target.files) {
      console.log(Array.from(e.target.files));
      Array.from(e.target.files).forEach((file, index) => {
        const reader = new FileReader();
        reader.onload = () => {
          setPreview(prevPreview => {
            const prev = [...prevPreview];
            prev[index] = { dataUrl: reader.result as string, file };
            return prev;
          })
        }
        reader.readAsDataURL(file);
      })
    }
  }, []);

  const onRemoveImage = useCallback((index: number) => () => {
    setPreview(prev => {
      const preview = [...prev];
      preview[index] = null;
      return preview;
    });
  }, []);
  return (
    <Modal>
      <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col flex-grow overscroll-none overflow-y-auto'>
        <div className='flex-grow'>
          <h1 className='font-bold flex justify-between items-center mb-1'>
            <Button variant="ghost" size="icon" className='justify-start' onClick={onClickClose}>
              <X />
            </Button>
            약속
          </h1>
          <div className='px-2'>
            <Textarea
              placeholder="Type your message here."
              className='rounded-lg resize-none h-[200px]'
              {...register('content', {
                required: '약속 내용을 입력해주세요.'
              })}
            />
          </div>
          {errors.content && <p>{errors.content.message}</p>}
          <div className='relative h-[400px] mt-4'>
            {preview.map((v, index) => (
              v && (
                <Image src={v.dataUrl} key={index} fill={true}
                  sizes='100%' alt='image' onClick={onRemoveImage(index)} />
              )
            ))}
          </div>
        </div>

        <div className='flex items-center gap-2 mt-3'>
          <input
            id='image' type="file" hidden accept='image/*'
            {...ref}
            onChange={onUpload}
          />
          <label htmlFor='image' className='cursor-pointer'>
            <ImageUp size={40} />
          </label>
          <Button className='flex-grow' disabled={!isValid}>약속 만들기</Button>
        </div>
      </form>
    </Modal>  
  )
}