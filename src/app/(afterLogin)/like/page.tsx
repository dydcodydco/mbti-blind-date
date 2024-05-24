import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';

export const metadata: Metadata = {
  title: '좋아요'
}

export default function Page() {
  return (
    <>
      <MainTitle>좋아요</MainTitle>
    </>
  )
}