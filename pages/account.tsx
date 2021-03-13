import accountStyles from "../styles/Account.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Summoner from "../components/Summoner";

const SelectAccount = () => {
  return (
    <Container className={accountStyles.container}>
      <p> SELECCIONE SU CUENTA</p>
      <Summoner />

      <Summoner />
    </Container>
  );
};

export default SelectAccount;
