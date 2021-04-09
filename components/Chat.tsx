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

const Chat: React.FC = () => {
  const [msg, setMessage] = useState("");
  const socket = useSocket();
  const dispatch = useAppDispatch();
  const { chats, activeChat, currentRecipient } = useAppSelector(
    (state) => state.chatReducer
  );
  const authorId = useAppSelector(
    (state) => state.summonerReducer.activeUserId
  );

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  useEffect((): any => {
    if (socket == null) return;

    socket.on("receive-message", ({ msg, authorId, currentRecipient }) => {
      console.log(currentRecipient);
      dispatch(addMessage({ msg, authorId, recipient: currentRecipient }));
    });

    return () => socket.off("receive-message");
  }, [socket]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!msg || !msg.trim()) return;

    dispatch(addMessage({ msg, authorId, recipient: currentRecipient }));
    socket.emit("send-message", { msg, currentRecipient, authorId });
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
                  isSent={msg.authorId === authorId}
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
