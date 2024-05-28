import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { IUser } from '@/model/User'
import Link from 'next/link'

type Props = {
  user: IUser
}

export default function SearchCard({ user }: Props) {
  return (
    <Card key={user.id}>
      <Link href={`/${user.id}`} className='flex items-center p-3'>
        <Avatar className='w-[40px] h-[40px] mr-3'>
          <AvatarImage src={user.Images[0].link} />
          <AvatarFallback>ZZ</AvatarFallback>
        </Avatar>
        <div className='flex flex-col justify-center'>
          <p className='font-semibold'>{user.nickname}, {user.age}, {user.area}</p>
          <span className='font-semibold'>{user.mbti.mbti}</span>
        </div>
      </Link>
    </Card>
  )
}