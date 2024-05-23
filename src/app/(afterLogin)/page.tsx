import MbtiCarousel from './(home)/_component/MbtiCarousel';
import UserCard from './_component/UserCard';

export default function Page() {
  return (
    <div>
      <MbtiCarousel />
      <div className='flex flex-col gap-2 px-2 pb-[50px] pt-2' style={{height: '600dvh'}}>
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
    </div>
  )
}