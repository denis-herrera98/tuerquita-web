import { Row, Col, Container } from "react-bootstrap";
import { useState } from "react";
import commandStyles from "../styles/Command.module.scss";

interface IProps {
  label: string;
  description: string;
}

const Command = ({ label, description }: IProps) => {
  return (
    <div className={commandStyles.command__container}>
      <Col md="8" xs="10" lg="6">
        <p className={commandStyles.command__description}>{description}</p>
        <div className={commandStyles.command__label}>
          <p> {label} </p>
        </div>
      </Col>
    </div>
  );
};

export default Command;
