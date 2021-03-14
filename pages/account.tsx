import accountStyles from "../styles/Account.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Summoner from "../components/Summoner";

const SelectAccount = () => {
  return (
    <Container className={accountStyles.container}>
      <h4> SELECCIONE SU CUENTA</h4>
      <Col xs={10} md={8} className={accountStyles.search__field}>
        <div className={accountStyles.region__selector}> </div>
      </Col>
      <h4> CUENTAS RECIENTES </h4>
      <Summoner name="Don Denis" level="232" emblem="Diamond.png" />
    </Container>
  );
};

export default SelectAccount;
