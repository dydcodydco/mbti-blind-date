import { IUser } from '@/model/User';
import Back from '@/app/(afterLogin)/_component/Back';
import { EllipsisVertical } from 'lucide-react';

type Props = {
  user: IUser
}

export default function UserDetailTop({ user }: Props) {
  return (
    <h2 className='font-bold flex justify-between items-center mb-1 sticky top-0 left-0 z-10 bg-white'>
      <div className='flex items-center'>
        <Back />
        {user.nickname}, {user.age}
      </div>
      <EllipsisVertical />
    </h2>
  )
}