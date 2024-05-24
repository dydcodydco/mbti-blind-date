import SetUserProvider from './_component/SetUserProvider';
import SetUser from './_component/SetUser';
import SetUserTop from './_component/SetUserTop';
import style from './userSetting.module.css';

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