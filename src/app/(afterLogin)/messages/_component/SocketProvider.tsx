'use client';

import { useSession } from 'next-auth/react';
import { ReactNode, createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { io, Socket } from 'socket.io-client';

type Props = { children: ReactNode };
type SocketContextType = {
  socket: Socket | null;
  isConnected: boolean;
  disconnect: Function;
  goDown: boolean;
  setGoDown: Function;
}

export const SocketContext = createContext<SocketContextType>({
  socket: null,
  isConnected: false,
  disconnect: () => { },
  goDown: false,
  setGoDown: () => {},
})

export default function SocketProvider({ children }: Props) {
  const { data: session } = useSession();
  const [socket, setSocket] = useState<any | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [goDown, setGoDown] = useState(false);
  const disconnect = useCallback(() => {
    socket?.disconnect();
    setSocket(null);
  }, [socket]);

  const value = useMemo(() => {
    return { socket, isConnected, disconnect, goDown, setGoDown }
  }, [socket, isConnected, disconnect, goDown]);

  useEffect(() => {
    console.log(socket, '-----------------------------------------socket???');
    if (!socket) {
      const socketInstance = io(`${process.env.NEXT_PUBLIC_BASE_URL}/messages`, {
        withCredentials: true,
      });
  
      socketInstance.on('connect', async () => {
        setIsConnected(true);
        console.log("소켓연결 성공!!!", socketInstance.id);
        // console.log(socketInstance, '--------------------socketInstance');
      })
  
      setSocket(socketInstance);
    }
  }, [socket]);

  useEffect(() => {
    if (socket?.connected && session?.user?.id) {
      console.log('--------------------------------------------socket emit login')
      socket?.emit('login', { id: session?.user?.id });
    }
  }, [session, socket]);

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  )
}