import { Metadata } from 'next';
import MainTitle from '../_component/MainTitle';

export const metadata: Metadata = {
  title: '세팅'
}

export default function Page() {
  return (
    <>
      <MainTitle>세팅</MainTitle>
    </>
  )
}