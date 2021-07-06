import Image from "next/image";
import { Container, Col, Row } from "react-bootstrap";
import homeStyles from "../styles/Home.module.scss";

const ToolFinderSection = (): JSX.Element => {
  return (
    <Container>
      <div className="finder">
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
            <div>
              <Image
                src="/party_gif.gif"
                alt="Tuerquita icon"
                width="802"
                height="590"
              />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ToolFinderSection;
