import { Container, Col, Row } from "react-bootstrap";

const ToolFinderSection = (): JSX.Element => {
  return (
    <Container>
      <div className="finder">
        <video autoPlay loop muted>
          <source src="https://www.youtube.com/watch?v=VT-_PsxYbec" />
        </video>

        <Row>
          <Col lg={5}>
            <div className="finder-description">
              <h2> Tuerquita Finder</h2>

              <div className="mb-3">
                <p>
                  Nuestra herramienta Tuerquita Finder te ayuda a encontrar
                  jugadores
                </p>
                <a target="_blank" href="/guide">
                  Guía: Cómo empezar
                </a>
              </div>
            </div>
          </Col>

          <Col lg={7}>
            <div className="video"> as</div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ToolFinderSection;
