import summonerStyles from "../styles/Summoner.module.scss";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

interface IProps {
  name: string;
  canDelete?: boolean;
  leader?: boolean;
  level: string;
  emblem: string;
}

const Summoner = ({ name, canDelete, leader, level, emblem }: IProps) => {
  return (
    <div className={summonerStyles.container}>
      <div className={summonerStyles.grid}>
        <div className={summonerStyles.profile__picture}>
          <Image
            className={summonerStyles.profile__picture}
            src="http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/3182.png"
            alt="ProfilePicture"
            width={100}
            height={100}
          />
        </div>
        <div className={summonerStyles.name}>
          <a target="_blank" href="">
            {name}
          </a>
          <p className={summonerStyles.subtitle}> Level {level} </p>
        </div>
        <div className={summonerStyles.ranked__data}>
          <div className={summonerStyles.ranked__column}>
            <Image
              className={summonerStyles.emblem}
              src={`/emblems/${emblem}`}
              alt="emblem"
              width={40}
              height={45}
            />
            <p> Soloq </p>
          </div>

          <div className={summonerStyles.ranked__column}>
            <Image
              className={summonerStyles.emblem}
              src="/emblems/Diamond.png"
              alt="emblem"
              width={40}
              height={45}
            />
            <p> Flex </p>
          </div>
        </div>
        {canDelete ? <div className={summonerStyles.incorrect}>X</div> : ""}
        {leader ? <h5 className={summonerStyles.tag__leader}>LIDER</h5> : ""}
      </div>
    </div>
  );
};

export default Summoner;
