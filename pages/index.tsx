import Image from "next/image";
import homeStyles from "../styles/Home.module.scss";

const Home = () => {
  return (
    <div className={homeStyles.description__section}>
      <div className={homeStyles.titles}>
        <h2>Tuerquita</h2>
        <h2>Bot de League of Legends</h2>
      </div>
      <Image src="/icon.png" alt="Tuerquita icon" width={254} height={259} />
      <div className={homeStyles.short__description}>
        <h3> Objetivo principal </h3>
        <p>
          Este bot de discord te ayuda a buscar invocadores con los cuales jugar
        </p>
      </div>
    </div>
  );
};

export default Home;
