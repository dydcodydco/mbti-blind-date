import { Button } from '@/components/ui/button'

export default function MbtiRecommendSection() {
  const mbtiList = [
    { mbti: 'E', feat: '외향형' },
    { mbti: 'I', feat: '내향형' },
    { mbti: 'S', feat: '감각형' },
    { mbti: 'N', feat: '직관형' },
    { mbti: 'T', feat: '사고형' },
    { mbti: 'F', feat: '감정형' },
    { mbti: 'J', feat: '판단형' },
    { mbti: 'P', feat: '인식형' },
    { mbti: 'ISTJ', feat: '현실주의자', score: 100 },
    { mbti: 'ISFJ', feat: '수호자', score: 100 },
    { mbti: 'INFJ', feat: '옹호자', score: 80 },
    { mbti: 'INTJ', feat: '전략가', score: 100 },
    { mbti: 'ISTP', feat: '장인', score: 80 },
    { mbti: 'ISFP', feat: '예술가', score: 100 },
    { mbti: 'INFP', feat: '중재자', score: 60 },
    { mbti: 'INTP', feat: '사색가', score: 40 },
    { mbti: 'ESTP', feat: '사업가', score: 60 },
    { mbti: 'ESFP', feat: '연예인', score: 80 },
    { mbti: 'ENFP', feat: '재기발랄한 활동가', score: 60 },
    { mbti: 'ENTP', feat: '논쟁가', score: 40 },
    { mbti: 'ESTJ', feat: '경영자', score: 100 },
    { mbti: 'ESFJ', feat: '집정관', score: 80 },
    { mbti: 'ENFJ', feat: '선도자', score: 60 },
    { mbti: 'ENTJ', feat: '지휘관', score: 80 }
  ]
  return (
    <div className='grid gap-1 flex-wrap grid-cols-3'>
      <Button variant={'outline'} className='py-1 px-3 max-h-[30px] font-normal'>전체</Button>
      <Button variant={'outline'} className='py-1 px-3 max-h-[30px] font-normal' style={{background: '#ADD8E6', borderColor: '#ADD8E6'}}>궁합 100%</Button>
      <Button variant={'outline'} className='py-1 px-3 max-h-[30px] font-normal' style={{ background: '#90EE90', borderColor: '#90EE90' }}>궁합 80%</Button>
      {mbtiList.map(d => (
        <Button
          key={d.mbti} title={d.feat} variant={'outline'} className='py-1 px-3 max-h-[30px] font-normal'
          style={{
            background: d.score === 100 ? '#ADD8E6' : d.score === 80 ? '#90EE90' : !d.score ? '#ffffff' :'#FFFACD',
            borderColor: d.score === 100 ? '#ADD8E6' : d.score === 80 ? '#90EE90' : !d.score ? '' : '#FFFACD'
          }}
        >
          {d.mbti}</Button>
      ))}
    </div>
  )
}