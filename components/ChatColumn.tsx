import chatStyles from "../styles/Chat.module.scss";
import firebase from "../services/firebase";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import Spinner from "react-bootstrap/Spinner";
import Summoner from "./../components/Summoner";
import { findRegionOPGG } from "../handlers/op_regions";
import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";

interface IProps {
  id: string;
}

const PartyChatColumn = ({ id }: IProps) => {
  const [snapshot, loading, error] = useDocumentOnce(
    firebase.firestore().doc(`lkfteam/${id}`)
  );

  return (
    <div className={chatStyles.left__column}>
      {error ? (
        <h4> Ocurrio un error... </h4>
      ) : loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <p>{snapshot.data()?.info}</p>

          <h4>TEAM</h4>

          {snapshot.data()?.data.map((player: any, index: number) => {
            const { soloq, flex } = findFlexAndSoloqStatus(player.rankedData);
            return (
              <Summoner
                id={player.id}
                name={player.lolName}
                profileIconId={player.profileIconId}
                level={player.summonerLevel}
                region={findRegionOPGG(player.region)}
                soloq={soloq?.tier}
                flex={flex?.tier}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default PartyChatColumn;
