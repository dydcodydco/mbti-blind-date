import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactNode, useState } from 'react'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

type Props = {
  children: ReactNode
}

export default function RQProvider({ children }: Props) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: { // react-query 전역 설정
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        }
      }
    })
  );  
  return (
    // Provide the client to your App
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={process.env.NEXT_PUBLIC_MODE === 'local'} />
    </QueryClientProvider>
  )
}