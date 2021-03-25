import React, { useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SocketContext = React.createContext<Socket>(null);

export function useSocket() {
  return useContext(SocketContext);
}

interface IProps {
  children: React.ReactNode;
}

const SocketProvider: React.FC = ({ children }: IProps) => {
  const [socket, setSocket] = useState<Socket>();
  const id = "2";

  socket?.on("chat-message", () => {
    console.log("se connecto el client");
  });

  useEffect((): (() => void) => {
    const newSocket = io("http://localhost:5000", { query: { id } });
    setSocket(newSocket);

    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};

export default SocketProvider;
