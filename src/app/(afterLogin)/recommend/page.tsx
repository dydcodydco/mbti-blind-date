import MainTitle from '../_component/MainTitle';
import RecommendSection from './_component/RecommendSection';
import style from './recommend.module.css'

export default function Page() {
  return (
    <div className={style.recommendSection}>
      <div className='absolute w-full'>
        <MainTitle>추천</MainTitle>
      </div>
      <RecommendSection />
    </div>
  )
}