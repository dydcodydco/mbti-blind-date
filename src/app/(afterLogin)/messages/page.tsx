import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';

export const metadata: Metadata = {
  title: '채팅'
}

export default function Page() {
  return (
    <>
      <MainTitle>채팅</MainTitle>
    </>
  )
}