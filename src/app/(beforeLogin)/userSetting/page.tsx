import SetUserProvider from './_component/SetUserProvider';
import SetUser from './_component/SetUser';
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