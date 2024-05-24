import MainTitle from '../_component/MainTitle';
import PromiseSection from './_component/PromiseSection';

export default function Page() {
  return (
    <>
      <MainTitle>약속</MainTitle>
      <div className='px-2'>
        어떤 약속을 잡고 싶나요?
      </div>
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <PromiseSection />
      </div>
    </>
  )
}