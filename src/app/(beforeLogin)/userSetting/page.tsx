import SetUserProvider from './_component/setUserProvider';
import SetUser from './_component/setUser';
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