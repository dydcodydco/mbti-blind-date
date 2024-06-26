import Home from '@/app/(afterLogin)/(home)/page';
import UserCard from '../../_component/UserCard';
import { Card } from '@/components/ui/card';
import style from '@/app/(afterLogin)/_component/userCard.module.css';
import MainTitle from '@/app/(afterLogin)/_component/MainTitle';

export default function UserPage() {
  return (
    <>
      <MainTitle>홈</MainTitle>
      <Card className={style.userCard}></Card>
      <Card className={style.userCard}></Card>
      <Card className={style.userCard}></Card>
    </>
  )
}