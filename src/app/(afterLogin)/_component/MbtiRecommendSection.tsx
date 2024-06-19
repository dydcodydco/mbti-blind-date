import { auth } from '@/auth';
import { Button } from '@/components/ui/button'
import { mbtiCompatibility } from '../_constants/constants';
import MbtiButtonList from './MbtiButtonList';

export default async function MbtiRecommendSection() {
  const session = await auth();
  const mbtiCompatibilityData = mbtiCompatibility;
  const mbtiList = Object.entries(mbtiCompatibilityData[(session?.user as any)?.mbti.toUpperCase()]);
  return (
    <div className='grid gap-1 flex-wrap grid-cols-3'>
      <MbtiButtonList mbtiList={mbtiList} />
    </div>
  )
}