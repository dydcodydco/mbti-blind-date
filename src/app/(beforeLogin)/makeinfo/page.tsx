import SetUserProvider from './_component/SetUserProvider2';
import SetUser from './_component/SetUser2';
import SetUserTop from './_component/SetUserTop';
import style from './userSetting.module.css';
import { auth } from '@/auth';

export default async  function MakeInfoPage() {
  const session = await auth();
  return (
    <SetUserProvider>
      <div className={style.userSetting}>
        <SetUserTop session={session} />
        <SetUser />
      </div>
    </SetUserProvider>
  )
}