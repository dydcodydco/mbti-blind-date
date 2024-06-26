import { ReactNode } from 'react';

export default function Modal({ children }: { children: ReactNode }) {
  return (
    <div className='bg-black bg-opacity-80 flex justify-center items-center fixed top-0 left-0 w-dvw h-dvh z-30'>
      <div className='p-2 md:p-5 relative top-0 bg-white max-w-full rounded-lg flex flex-col w-full h-dvh md:min-w-[600px] md:min-h-[70dvh] md:h-auto md:w-auto'>
        {children}
      </div>
    </div>
  )
}