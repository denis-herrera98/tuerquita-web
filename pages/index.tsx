import Image from "next/image";
import Command from "../components/Command";
import homeStyles from "../styles/Home.module.scss";
import { Row, Col, Container } from "react-bootstrap";

const Home: React.FC = () => {
  return (
    <>
      <div
        id="description__section"
        className={homeStyles.description__section}
      >
        <div>
          <h4>Tuerquita</h4>
          <h4>Bot de League of Legends</h4>
        </div>
        <div>
          <div className={homeStyles.logo}>
            <div className={homeStyles.party_gif}>
              <Image
                src="/party_gif.gif"
                alt="Tuerquita icon"
                width="802"
                height="590"
              />
            </div>
            <div className={homeStyles.icon}>
              <Image
                src="/favicon.ico"
                alt="Tuerquita icon"
                width="254"
                height="259"
              />
            </div>
          </div>
        </div>

        <div className={homeStyles.short__description}>
          <h4> Objetivo principal </h4>
          <Row className="justify-content-center">
            <Col xs="6">
              <p>
                Este bot de discord te ayuda a buscar invocadores con los cuales
                jugar entre todos los servidores de Discord en él que esté
              </p>
            </Col>
          </Row>
        </div>
      </div>
      <div id="commands__section" className={homeStyles.commands__section}>
        <Container>
          <div className={homeStyles.titles}>
            <h2>Commandos</h2>
            <Command
              label="t! add-region"
              description="Añade una región al servidor de discord. Si se añade NA por ejemplo, se notificará al sevidor cuando alguien perteneciente a NA busque equipo"
            />
            <Command
              label="t! search "
              description="Notifica a todas los servidores que alguien está buscando equipo "
            />
            <Command
              label="t! delete-region"
              description="Elimina la región del servidor de discord"
            />
            <Command
              label="t! regions"
              description="Muestra todas las regiones"
            />
            <Command
              label="t! add "
              description="Vincula tu cuenta de League of Legends con tu cuenta de discord. Con esto se podrá mencionar a un usuario de discord en los comandos"
            />
            <Command
              label="t! soloq"
              description="Muestra sus estadísticas de soloq"
            />
            <Command
              label="t! flex"
              description="Muestra las estadísticas de flex"
            />
            <Command
              label="t! lastmatch "
              description="Muestra sus estadísticas del juego más reciente"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;

const tablePhoneView = () => {};
