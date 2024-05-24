import { ReactNode } from 'react';

export default function MainTitle({children}: {children: ReactNode}) {
  return (
    <h1 className='p-1 pt-4 justify-center font-extrabold sticky z-10 top-0 left-0 bg-white hidden sm:flex z-20'>
      {children}
    </h1>
  )
}