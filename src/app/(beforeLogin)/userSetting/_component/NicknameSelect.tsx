import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useCallback, useContext, useEffect, useRef } from 'react';
import { setUserContext } from './SetUserProvider';

export default function NicknameSelect() {
  const { nickname, setNickname, setProgress } = useContext(setUserContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const onClickNickname = useCallback(() => {
    setProgress(30);
    console.log('닉네임', nickname);
  }, [setProgress, nickname]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className='pt-5 flex flex-col flex-grow'>
      <h1>닉네임을 정해주세요.</h1>
      <div className='flex justify-between mt-3 flex-grow'>
        <Input
          type="text" placeholder="nickname" value={nickname} ref={inputRef}
          onChange={(e) => setNickname(e.target.value)} />
      </div>
      <Button className='w-full' onClick={onClickNickname} disabled={!nickname}>다음</Button>
    </div>
  )
}