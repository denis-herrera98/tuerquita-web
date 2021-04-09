import chatStyles from "../styles/Chat.module.scss";
import Spinner from "react-bootstrap/Spinner";
import Summoner from "./../components/Summoner";
import { findRegionOPGG } from "../handlers/op_regions";
import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";

interface IProps {
  error: any;
  loading: boolean;
  data: any;
  tittle: string;
}

const PartyChatColumn: React.FC<IProps> = ({
  tittle,
  error,
  loading,
  data,
}: IProps) => {
  return (
    <div className={chatStyles.left__column}>
      {error ? (
        <h4> Ocurrio un error... </h4>
      ) : loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h4>{tittle}</h4>
          <p>{data.info}</p>

          {data.data.map((player: any, index: number) => {
            const { soloq, flex } = findFlexAndSoloqStatus(player.rankedData);
            return (
              <Summoner
                cursorPointer={false}
                isForChat={false}
                isClickeable={false}
                isNameClickeable={true}
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
