import { Row, Col } from "react-bootstrap";
import partyStyles from "../styles/Party.module.scss";
import RowPlayer from "./RowPlayer";

const Party = ({ team }) => {
  return (
    <div className={`${partyStyles.container} ${partyStyles.border__20}`}>
      <p className={partyStyles.tittle}>{team.info}</p>
      <p className={partyStyles.subtittle}>
        {new Date(team.timestamp).toLocaleString("en-US")}
      </p>

      <div className={`${partyStyles.grid} `}>
        <div
          className={` ${partyStyles.soloq} d-flex justify-content-center align-items-center`}
        >
          soloq
        </div>
        <div
          className={` ${partyStyles.flex} d-flex justify-content-center align-items-center`}
        >
          flex
        </div>

        {team.data.map((player, index) => {
          return (
            <RowPlayer index={index} team={team} player={player} key={index} />
          );
        })}
      </div>
    </div>
  );
};

export default Party;
