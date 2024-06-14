import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { IPost } from '@/model/Post'
import { InfiniteData, useMutation, useQueryClient } from '@tanstack/react-query';
import { produce } from 'immer';
import { EllipsisVertical } from 'lucide-react'
import { Session } from 'next-auth'
import { useCallback } from 'react';

type Props = { post: IPost, session?: Session | null };

export default function PromiseCardDropdown({ post, session }: Props) {
  const queryClient = useQueryClient();

  const deleteMutation = useMutation({
    mutationFn: async () => {
      return fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/${post.id}`, {
        method: 'delete',
        credentials: 'include',
      })
    },
    async onSuccess(response, variable, context) {
      console.log(response, '--------------글 제거 후 프로미스');
      const newPost = await response.json();
      console.log(newPost, '--------------글 제거 정보');
      const queryCache = queryClient.getQueryCache();
      const queryKeys = queryCache.getAll().map(cache => cache.queryKey);
      queryKeys.map((queryKey) => {
        const value: IPost | InfiniteData<IPost[]> | undefined = queryClient.getQueryData(queryKey);
        if (queryKey[0] === 'posts') {
          console.log(queryKey[0]);
          if (value && 'pages' in value) {
            console.log('----------value', value);
            const shallow = produce(value, draft => {
              draft.pages = draft.pages.map(d => d.filter(v => v.id !== newPost.PostId));
              console.log(draft);
            })
            console.log(shallow, '----------------------------shallow');
            queryClient.setQueryData(queryKey, shallow);
          }
        }
      })
    },
    onError(error) {
      console.error('게시물 업로드 중 에러 발생', error);
    }
  });

  const onClickDelete = useCallback(() => {
    deleteMutation.mutate();
  }, [deleteMutation]);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <span className='cursor-pointer'><EllipsisVertical color={'white'} /></span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>문제가 있으신가요?</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {post?.User?.email === session?.user?.email ? (
            <DropdownMenuItem className='text-red-500 cursor-pointer' onClick={onClickDelete}>
              삭제하기
            </DropdownMenuItem>
          ) : <>
            <DropdownMenuItem className='cursor-pointer'>
              신고하기
            </DropdownMenuItem>
            <DropdownMenuItem className='text-red-500 cursor-pointer'>
              차단하기
            </DropdownMenuItem>
          </>}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}