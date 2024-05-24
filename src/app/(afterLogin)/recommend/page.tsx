import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';
import RecommendSection from './_component/RecommendSection';
import style from './recommend.module.css'

export const metadata: Metadata = {
  title: '추천'
}

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