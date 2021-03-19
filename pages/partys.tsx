import { Container, Row, Col } from "react-bootstrap";
import Party from "../components/Party";

const Partys = () => {
  return (
    <Container>
      <h4 className="my-5 text-center"> GRUPOS DISPONIBLES </h4>
      <Row>
        <Col lg={6}>
          <Party />
        </Col>

        <Col lg={6}>
          <Party />
        </Col>
        <Col lg={6}>
          <Party />
        </Col>

        <Col lg={6}>
          <Party />
        </Col>
      </Row>
    </Container>
  );
};

export default Partys;
