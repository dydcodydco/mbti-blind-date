import SetUserProvider from '@/app/(beforeLogin)/userSetting/_component/SetUserProvider';
import SetUser from '@/app/(beforeLogin)/userSetting/_component/SetUser';
import style from './userSetting.module.css';
import SetUserTop from './_component/SetUserTop';

export default function Page () {  
  return (
    <SetUserProvider>
      <div className={style.userSetting}>
        <SetUserTop />
        <SetUser />
      </div>
    </SetUserProvider>
  )
}