import Home from '@/app/(afterLogin)/(home)/page';
import UserCard from '@/app/(afterLogin)/_component/UserCard';
import { Card } from '@/components/ui/card';
import style from '@/app/(afterLogin)/_component/userCard.module.css';
import MainTitle from '@/app/(afterLogin)/_component/MainTitle';
import UserDetailModal from '@/app/(afterLogin)/@modal/(.)tester/[userId]/page';

type Props = { params: { userId: string } };

export default function UserPage({params}: Props) {
  return (
    <>
      <UserDetailModal params={params} />
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <MainTitle>홈</MainTitle>
        <Card className={style.userCard}></Card>
        <Card className={style.userCard}></Card>
        <Card className={style.userCard}></Card>
        <Card className={style.userCard}></Card>
        <Card className={style.userCard}></Card>
        </ div>
    </>
  )
}