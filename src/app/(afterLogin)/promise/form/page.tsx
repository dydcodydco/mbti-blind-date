import PromiseFormModal from '@/app/(afterLogin)/@modal/(.)promise/form/page';
import PromiseSection from '@/app/(afterLogin)/promise/_component/PromiseSection'
import MainTitle from '@/app/(afterLogin)/_component/MainTitle';
import PromiseFormButton from '../_component/PromiseFormButton';

export default function Page() {
  return (
    <>
      <PromiseFormModal />
      <MainTitle>약속</MainTitle>
      <PromiseFormButton />
      <div className='p-2 gap-2 flex flex-col pb-[50px]'>
        <PromiseSection />
      </div>
    </>
  )
}