import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { IUser } from '@/model/User'
import Link from 'next/link'

type Props = {
  user: IUser
}

export default function LikeCard({ user }: Props) {
  return (
    <Card key={user?.id}>
      <Link href={`/tester/${user.id}`} className='flex items-center p-3'>
        <Avatar className='w-[40px] h-[40px] mr-3'>
          <AvatarImage src={(user.Images as any)[0]?.src ? (user.Images as any)[0]?.src : 'https://github.com/shadcn.png'} />
          <AvatarFallback>ZZ</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center'>
          <p className='font-semibold'>{user?.nickname}, {user?.age}, {user?.area}</p>
          <span className='font-semibold'>{user?.mbti}</span>
        </div>
      </Link>
    </Card>
  )
}