import chatStyles from "../styles/Chat.module.scss";
import { updateSummonerRequest } from "../handlers/lolapi";
import { useRouter } from "next/router";
import breakpointsStyles from "../styles/base/Responsive.module.scss";
import { useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import Summoner from "./../components/Summoner";
import { findRegionOPGG } from "../handlers/op_regions";
import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";
import { useAppSelector } from "../redux/hooks";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { LkfTeam, Player } from "../interfaces/lkfteam";
import ChangeSummoner from "./../components/ChangeSummoner";

interface IProps {
  partyId: string;
  error: any;
  loading: boolean;
  data: LkfTeam;
}

const PartyChatColumn: React.FC<IProps> = ({
  error,
  partyId,
  loading,
  data,
}: IProps) => {
  const accountSelected = useAppSelector(
    (state) => state.summonerReducer.summoner
  );
  const router = useRouter();
  useEffect(() => {
    return () => {
      updateSummonerRequest(accountSelected.id, partyId.toString(), "inactive");
    };
  }, []);

  useEffect(() => {
    if (!data) return;

    if (!data.active) {
      Swal.fire({
        title: "El grupo cerró",
        icon: "error",
        showConfirmButton: false,
      });
      router.replace("/partys/");
    }

    if (data.rejectedPlayers?.includes(accountSelected.id)) {
      Swal.fire({
        title: "Lo sentimos, usted ha sido rechazado",
        icon: "error",
        showConfirmButton: false,
      });
      router.replace("/partys/");
    }
  }, [data, accountSelected, partyId]);

  return (
    <div className={chatStyles.left__column}>
      {error ? (
        <h4> Ocurrio un error... </h4>
      ) : loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          <h4>Team</h4>
          <p className={breakpointsStyles.hide__table}>{data.info}</p>

          <div className={chatStyles.summoners__container}>
            {data.data.map((player: Player, index: number) => {
              const { soloq, flex } = findFlexAndSoloqStatus(player.rankedData);

              return (
                <Summoner
                  cursorPointer={false}
                  isForChat={false}
                  isClickeable={false}
                  isNameClickeable={true}
                  id={player.lolId}
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
          </div>
          <ChangeSummoner name={accountSelected.name} />
        </>
      )}
    </div>
  );
};

export default PartyChatColumn;
