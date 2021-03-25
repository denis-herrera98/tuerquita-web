import chatStyles from "../styles/Chat.module.scss";
import Spinner from "react-bootstrap/Spinner";
import Summoner from "./../components/Summoner";
import { findRegionOPGG } from "../handlers/op_regions";
import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";

interface IProps {
  error: any;
  loading: boolean;
  data: any;
}

const ManagePartyColumn = ({ error, loading, data }: IProps) => {
  return (
    <div className={chatStyles.left__column}>
      {error ? (
        <h4> Ocurrio un error... </h4>
      ) : loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h4>SOLICITANTES</h4>
          {data.players.map((player: any, index: number) => {
            return (
              <Summoner
                cursorPointer={false}
                isForChat={true}
                canDelete={true}
                noClickeable={true}
                id={player.id}
                name={player.name}
                profileIconId={player.profileIconId}
                level={player.level}
                soloq={player.soloq}
                flex={player.flex}
                key={index}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default ManagePartyColumn;
