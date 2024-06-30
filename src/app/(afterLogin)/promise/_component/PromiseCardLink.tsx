import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IPost } from '@/model/Post'
import { User } from 'lucide-react'
import Link from 'next/link'

type Props = {
  post: IPost
}

export default function PromiseCardLink({ post }: Props) {
  return (
    <Link href={`/tester/${post?.UserId}`} className='flex items-center'>
      <Avatar className='w-[40px] h-[40px]'>
        {post.User.Images && (post.User.Images as any)[0]?.src
          ? (<>
              <AvatarImage src={(post.User.Images as any)[0]?.src} />
              <AvatarFallback>{post?.User?.nickname?.slice(0, 2)}</AvatarFallback>
            </>)
          : <User className='w-[40px] h-[40px] rounded-full bg-white' />}
      </Avatar>
      <div className='ml-2 flex flex-col justify-center'>
        <h3 className='font-semibold text-white'>{post?.User?.nickname || '테스트'}, {post?.User?.age || 30}</h3>
      </div>
    </Link>
  )
}