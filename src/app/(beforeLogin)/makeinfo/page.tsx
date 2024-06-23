import SetUserProvider from './_component/SetUserProvider2';
import SetUser from './_component/SetUser2';
import SetUserTop from './_component/SetUserTop';
import style from './userSetting.module.css';

export default function MakeInfoPage () { 
  return (
    <SetUserProvider>
      <div className={style.userSetting}>
        <SetUserTop />
        <SetUser />
      </div>
    </SetUserProvider>
  )
}