import React, { useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAppSelector } from "../redux/hooks";

const SocketContext = React.createContext<Socket>(null);

export function useSocket(): Socket {
  return useContext(SocketContext);
}

interface IProps {
  children: React.ReactNode;
}

const SocketProvider: React.FC = ({ children }: IProps) => {
  const [socket, setSocket] = useState<Socket>();
  const { activeUserId, activeCollection } = useAppSelector(
    (state) => state.summonerReducer
  );

  useEffect((): (() => void) => {
    if (activeUserId) {
      const newSocket = io("http://localhost:5000", {
        query: { id: activeUserId, collection: activeCollection },
      });
      setSocket(newSocket);

      return () => newSocket.close();
    }
  }, [activeUserId, activeCollection]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
