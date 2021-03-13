import summonerStyles from "../styles/Summoner.module.scss";
import Image from "next/image";
import { Row, Col, Container } from "react-bootstrap";

const Summoner = () => {
  return (
    <div className={summonerStyles.container}>
      <Image
        className={summonerStyles.profile__picture}
        src="http://ddragon.leagueoflegends.com/cdn/10.16.1/img/profileicon/3182.png"
        alt="ProfilePicture"
        width={100}
        height={100}
      />

      <div className={summonerStyles.summoner__info}>
        <a target="_blank" href="">
          Don Denis, level 562
        </a>

        <Row>
          <Col xs={4}>
            <p> Soloq </p>
          </Col>
          <Col>
            <Image
              className={summonerStyles.emblem}
              src="/emblems/Diamond.png"
              alt="emblem"
              width={45}
              height={52}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <p> Flex </p>
          </Col>
          <Col>
            <Image
              className={summonerStyles.emblem}
              src="/emblems/Challenger.png"
              alt="emblem"
              width={45}
              height={52}
            />
          </Col>
        </Row>
        <Row className={summonerStyles.options__container}>
          <div className={summonerStyles.incorrect}>X</div>
          <div className={summonerStyles.correct}>
            <div className={summonerStyles.lines}></div>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Summoner;
