import { Col, Row } from "react-bootstrap";
import chatStyles from "../styles/Chat.module.scss";

interface IProps {
  msg: string;
  isSent: boolean;
}

const MessageBubble = ({ msg, isSent }: IProps) => {
  return (
    <Col
      md={6}
      className={`${isSent ? chatStyles.col__sent : chatStyles.col__response}`}
    >
      <div
        className={`${chatStyles.chat__bubble} ${
          isSent ? chatStyles.sent : chatStyles.response
        }`}
      >
        <p>{msg}</p>
      </div>
    </Col>
  );
};

export default MessageBubble;
