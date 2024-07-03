import { ReactNode } from 'react';
import style from './layout.module.css';
import LeftNav from '../_component/LeftNav';
import BottomNav from '../_component/BottomNav';
import TopNav from '../_component/TopNav';
import MbtiRecommendSection from './_component/MbtiRecommendSection';
import UserRandomRecommendSection from './_component/UserRandomRecommendSection';
import { auth } from '@/auth';
import RQProvider from '@/app/(afterLogin)/_component/RQProvider';
import SearchForm from '@/app/(afterLogin)/_component/SearchForm';

type Props = { children: ReactNode, modal: ReactNode };

export default async function Layout({ children, modal }: Props) {
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
            <LeftNav session={session?.user} />
          </div>
        </aside>
        <div className={style.rightSectionWrapper}>
          <div className={style.rightSectionInner}>
            <main className={style.main}>{children}</main>
            <section className={style.rightSection}>
              <div className='mt-12 pt-[4px]'>
                <SearchForm />
                <h3 className='font-extrabold mb-3 mt-3'>궁합 좋은 MBTI</h3>
                <MbtiRecommendSection />
                {session?.user && <>
                  <h3 className='font-extrabold mb-3 mt-8'>이분들 어떠세요?</h3>
                  {/* <UserRandomRecommendSection session={session?.user} /> */}
                </>}
              </div>
            </section>
          </div>
        </div>
        <footer className={style.bottomSection}>
          <BottomNav session={session?.user} />
        </footer>
      </RQProvider>
    </div>
  )
}