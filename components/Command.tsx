import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import commandStyles from "../styles/Command.module.scss";

interface IProps {
  label: string;
  description: string;
}

const Command = ({ label, description }: IProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={commandStyles.command__container}>
      <Col xs="6">
        <p>{description}</p>
        <div className={commandStyles.command__label}>
          <p> {label} </p>
          <div
            onClick={handleOnClick}
            className={
              isOpen ? commandStyles.arrow__down : commandStyles.arrow__up
            }
          ></div>
        </div>
      </Col>
    </div>
  );
};

export default Command;
