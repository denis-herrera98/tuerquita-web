import Image from "next/image";
import Command from "../components/Command";
import homeStyles from "../styles/Home.module.scss";
import commandStyles from "../styles/Command.module.scss";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Container>
        <div
          id="description__section"
          className={homeStyles.description__section}
        >
          <div className={homeStyles.titles}>
            <h2>Tuerquita</h2>
            <h2>Bot de League of Legends</h2>
          </div>
          <div className={homeStyles.logo}>
            <Image
              src="/icon.png"
              alt="Tuerquita icon"
              width={254}
              height={259}
            />
          </div>
          <div className={homeStyles.short__description}>
            <h3> Objetivo principal </h3>
            <Row className="justify-content-center">
              <Col xs="6">
                <p>
                  Este bot de discord te ayuda a buscar invocadores con los
                  cuales jugar Este bot de discord te ayuda a buscar invocadores
                  con los invocadores con los cuales jugar
                </p>
              </Col>
            </Row>
          </div>
        </div>
      </Container>

      <div id="commands__section" className={homeStyles.commands__section}>
        <Container>
          <div className={homeStyles.titles}>
            <h2>Commandos</h2>
            <Command label="hijos de remil puta" description=" cacacacaca " />
            <Command
              label="t! add <region> <summoner>"
              description=" cacacacaca "
            />
            <Command label="hijos de remil puta" description=" cacacacaca " />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
