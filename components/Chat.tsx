import { addMessage } from "../redux/chat/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import MessageBubble from "../components/MessageBubble";
import { useSocket } from "../contexts/SocketProvider";
import chatStyles from "../styles/Chat.module.scss";
import { ChatState } from "../redux/chat/chatReducer";

interface Message {
  msg: string;
  authorId: string;
}

const Chat = () => {
  const [msg, setMessage] = useState("");
  const socket = useSocket();
  const dispatch = useAppDispatch();
  const { chats, activeChat, currentRecipient } = useAppSelector(
    (state) => state.chatReducer
  );
  const id = useAppSelector((state) => state.summonerReducer.summoner.id);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect((): any => {
    if (socket == null) return;

    socket.on("receive-message", ({ msg, currentRecipient }) => {
      dispatch(addMessage(msg, currentRecipient));
    });

    return () => socket.off("receive-message");
  }, [socket]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!msg || !msg.trim()) return;

    dispatch(addMessage(msg, currentRecipient));
    socket.emit("send-message", { msg, currentRecipient });
    setMessage("");
  };

  return (
    <div className={chatStyles.chat__container}>
      <div className={chatStyles.chat__background}>
        <div className={chatStyles.messages__container}>
          {chats
            .find((conversation) => conversation.chatId === activeChat)
            ?.messages.map((msg: Message, i) => {
              return (
                <MessageBubble
                  key={i}
                  msg={msg.msg}
                  isSent={msg.authorId !== id}
                />
              );
            })}
        </div>

        <form className={chatStyles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={chatStyles.text__field}
            onChange={handleOnChange}
            value={msg}
            placeholder={`#Mensaje para {msgTo}`}
          />
        </form>
      </div>
    </div>
  );
};

export default Chat;
