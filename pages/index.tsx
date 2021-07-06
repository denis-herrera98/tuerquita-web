import Image from "next/image";
import Command from "../components/Command";
import homeStyles from "../styles/Home.module.scss";
import { Row, Col, Container } from "react-bootstrap";
import Logo from "../components/Logo";
import { commands } from "../data/commands";
import ToolFinderSection from "../components/ToolFinderSection";

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
        <div className="logo-container">
          <Logo size={500} />
        </div>
      </div>
      <ToolFinderSection />
      <div id="commands__section" className={homeStyles.commands__section}>
        <Container>
          <div className={homeStyles.titles}>
            <h2>Commandos</h2>
          </div>
          <div className="commands-container">
            {commands.map((com, i) => {
              return <Command data={com} index={i} key={i} />;
            })}
          </div>
        </Container>
      </div>
    </>
  );
};

export default Home;
