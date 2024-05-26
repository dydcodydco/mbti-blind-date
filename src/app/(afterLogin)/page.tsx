import MbtiCarousel from './(home)/_component/MbtiCarousel';
import MainTitle from './_component/MainTitle';
import UserCard from './_component/UserCard';

export default function Page() {
  return (
    <>
      <MainTitle>홈</MainTitle>
      <MbtiCarousel />
      <div className='flex flex-col gap-2 px-2 pb-[100px] pt-[74px] sm:pt-2'>
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
        <UserCard />
      </div>
    </>
  )
}