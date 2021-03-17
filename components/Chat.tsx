import { useState } from "react";
import MessageBubble from "../components/MessageBubble";
import chatStyles from "../styles/Chat.module.scss";

interface IProps {
  msgTo: string;
  messages: Message[];
}

interface Message {
  msg: string;
  isSent: boolean;
  authorId: string;
}

const Chat = ({ msgTo }: IProps) => {
  const [msg, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      msg: "SOYOYOYOYOY",
      isSent: true,
      authorId: "1",
    },
    {
      msg: "SOYOYOYOYOY",
      isSent: false,
      authorId: "1",
    },
    {
      msg: "SOYOYOYOYOY",
      isSent: true,
      authorId: "1",
    },
  ]);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    messages.unshift({
      msg,
      isSent: true,
      authorId: "1",
    });
    setMessage("");
  };

  return (
    <div className={chatStyles.chat__container}>
      <div className={chatStyles.chat__background}>
        <div className={chatStyles.messages__container}>
          {messages.map((msg: Message, i) => {
            return <MessageBubble key={i} msg={msg.msg} isSent={msg.isSent} />;
          })}
        </div>

        <form className={chatStyles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            className={chatStyles.text__field}
            onChange={handleOnChange}
            value={msg}
            placeholder={`#Mensaje para ${msgTo}`}
          />
        </form>
      </div>
    </div>
  );
};

export default Chat;
