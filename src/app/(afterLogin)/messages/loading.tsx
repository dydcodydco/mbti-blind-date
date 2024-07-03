import { LoaderCircle } from 'lucide-react';

export default function Loading({className}: {className?: string}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className={className}>
      <LoaderCircle className='animate-spin' />
    </div>
  )
}