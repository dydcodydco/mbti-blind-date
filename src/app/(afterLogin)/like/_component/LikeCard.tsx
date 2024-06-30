import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { IUser } from '@/model/User'
import { User } from 'lucide-react'
import Link from 'next/link'

type Props = {
  user: IUser
}

export default function LikeCard({ user }: Props) {
  return (
    <Card key={user?.id}>
      <Link href={`/tester/${user.id}`} className='flex items-center p-3'>
        <Avatar className='w-[40px] h-[40px] mr-3'>
          {user.Images && (user.Images as any)[0]?.src
            ? (<>
                <AvatarImage src={(user.Images as any)[0]?.src} />
                <AvatarFallback>ZZ</AvatarFallback>
              </>)
            : <User className='w-[40px] h-[40px] rounded-full' />}
        </Avatar>
        <div className='flex flex-col justify-center'>
          <p className='font-semibold'>{user?.nickname}, {user?.age}, {user?.area}</p>
          <span className='font-semibold'>{user?.mbti}</span>
        </div>
      </Link>
    </Card>
  )
}