import { auth } from '@/auth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';
import { Room as IRoom } from '@/model/Room';
import { IUser } from '@/model/User';
import { User } from 'lucide-react';
import { Session } from 'next-auth';
import Link from 'next/link';

type Props = { room: IRoom, session: Session };

export default function Room({ room, session }: Props) {
  console.log(session);
  const receiver = room.RoomReceiver.id.toString() !== session?.user?.id ? room.RoomReceiver : room.RoomSender;
  return (
    <Card>
      <Link href={`/messages/${room.room}`} className='flex items-center p-3'>
        <Avatar className='w-[40px] h-[40px] mr-3'>
          {room.RoomReceiver.Images && (room.RoomReceiver.Images as any)[0]?.src
            ? (<>
                <AvatarImage src={(room.RoomReceiver.Images as any)[0]?.src} />
                <AvatarFallback>ZZ</AvatarFallback>
              </>)
            : <User className='w-[40px] h-[40px] rounded-full' />}
        </Avatar>
        <div className='flex flex-col justify-center'>
          <p className='font-semibold'>{receiver?.email}, {receiver?.mbti}</p>
          <span className='font-medium mt-2'>{room.content}</span>
        </div>
      </Link>
    </Card>
  )
}