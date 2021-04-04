import React, { useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";
import { useAppSelector } from "../redux/hooks";

const SocketContext = React.createContext<Socket>(null);

export function useSocket() {
  return useContext(SocketContext);
}

interface IProps {
  children: React.ReactNode;
}

const SocketProvider: React.FC = ({ children }: IProps) => {
  const [socket, setSocket] = useState<Socket>();
  const id = useAppSelector((state) => state.summonerReducer.summoner?.id);

  useEffect((): (() => void) => {
    if (id) {
      const newSocket = io("http://localhost:5000", { query: { id } });
      setSocket(newSocket);
      console.log("id en socket provider", id);

      return () => newSocket.close();
    }
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
