import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { IPost } from '@/model/Post'
import Link from 'next/link'

type Props = {
  promise: IPost
}

export default function PromiseCardLink({ promise }: Props) {
  return (
    <Link href={`/${promise.User.id}`} className='flex items-center'>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>{promise.User.nickname.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <div className='ml-2 flex flex-col justify-center'>
        <h3 className='font-semibold text-white'>{promise.User.nickname}, {promise.User.age}</h3>
      </div>
    </Link>
  )
}