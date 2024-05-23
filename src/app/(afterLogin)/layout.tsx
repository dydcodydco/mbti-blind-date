import Link from 'next/link';
import { ReactNode } from 'react';
import style from './layout.module.css';
import LeftNav from '../_component/LeftNav';
import BottomNav from '../_component/BottomNav';
import TopNav from '../_component/TopNav';

export default function Layout({children}: {children: ReactNode}) {
  return (
    <div className={style.container}>
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
          <div className={style.rightSection}>
            right section
          </div>
        </div>
      </div>
      <footer className={style.bottomSection}>
        <BottomNav />
      </footer>
    </div>
  )
}