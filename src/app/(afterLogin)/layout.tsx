import { ReactNode } from 'react';
import style from './layout.module.css';
import LeftNav from '../_component/LeftNav';
import BottomNav from '../_component/BottomNav';
import TopNav from '../_component/TopNav';
import MbtiRecommendSection from './_component/MbtiRecommendSection';
import FriendRecommendSection from './_component/FriendRecommendSection';
import { auth } from '@/auth';
import RQProvider from '@/app/(afterLogin)/_component/RQProvider';

export default async function Layout({ children, modal }: { children: ReactNode, modal: ReactNode }) {
  const session = await auth();
  return (
    <div className={style.container}>
      <RQProvider>
        {modal}
        <header className={style.topSection}>
          <TopNav />
        </header>
        <aside className={style.leftSectionWrapper}>
          <div className={style.leftSection}>
            <LeftNav />
          </div>
        </aside>
        <div className={style.rightSectionWrapper}>
          <div className={style.rightSectionInner}>
            <main className={style.main}>{children}</main>
            <section className={style.rightSection}>
              <div>
                <h3 className='font-extrabold mb-3 mt-12'>궁합 좋은 MBTI</h3>
                <MbtiRecommendSection />
                {session?.user && <>
                  <h3 className='font-extrabold mb-3 mt-8'>친구 추천</h3>
                  <FriendRecommendSection />
                </>}
              </div>
            </section>
          </div>
        </div>
        <footer className={style.bottomSection}>
          <BottomNav />
        </footer>
      </RQProvider>
    </div>
  )
}