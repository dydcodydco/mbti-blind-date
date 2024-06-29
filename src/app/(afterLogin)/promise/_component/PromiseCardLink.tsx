import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IPost } from '@/model/Post'
import Link from 'next/link'

type Props = {
  post: IPost
}

export default function PromiseCardLink({ post }: Props) {
  return (
    <Link href={`/tester/${post?.UserId}`} className='flex items-center'>
      <Avatar>
        <AvatarImage src={post.User.Images && (post.User.Images as any)[0]?.src ? (post.User.Images as any)[0]?.src : 'https://github.com/shadcn.png'} />
        <AvatarFallback>{post?.User?.nickname.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className='ml-2 flex flex-col justify-center'>
        <h3 className='font-semibold text-white'>{post?.User?.nickname || '테스트'}, {post?.User?.age || 30}</h3>
      </div>
    </Link>
  )
}