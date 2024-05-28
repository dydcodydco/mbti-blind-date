import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card } from '@/components/ui/card'
import { IUser } from '@/model/User'

type Props = {
  user: IUser
}

export default function LikeCard({ user }: Props) {
  return (
    <Card key={user.id} className='flex items-center'>
      <Avatar className='w-[40px] h-[40px] mr-2'>
        <AvatarImage src={user.Images[0].link} />
        <AvatarFallback>ZZ</AvatarFallback>
      </Avatar>
      <div>
        <p className='font-semibold'>{user.nickname}, {user.age}, {user.area}</p>
        <span className='font-semibold'>{user.mbti.mbti}</span>
      </div>
    </Card>
  )
}