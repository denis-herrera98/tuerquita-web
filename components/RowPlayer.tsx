import partyStyles from "../styles/Party.module.scss";
import Image from "next/image";
import { findRegionOPGG } from "../handlers/op_regions";
import { useRouter } from "next/router";
import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";

interface IProps {
  index: number;
  team: any;
  player: any;
}

const RowPlayer: React.FC<IProps> = ({ index, team, player }: IProps) => {
  const { soloq, flex } = findFlexAndSoloqStatus(player.rankedData);
  const region = findRegionOPGG(player.region);
  const router = useRouter();

  const handleClick = () => {
    router.push(`/party/${team.id}`);
  };

  return (
    <>
      <div
        className={` ${getBackgroundColor(
          index
        )} d-flex  align-items-center p-3 `}
      >
        <a
          target="_blank"
          href={`https://${region}/userName=${player.lolName}`}
        >
          {player.lolName}
        </a>
      </div>
      <div
        className={` ${getBackgroundColor(
          index
        )} d-flex justify-content-center align-items-center`}
      >
        <Image
          src={`${
            soloq ? `/emblems/${soloq.tier}.png` : "/emblems/UNRANKED.png"
          }`}
          alt="emblem"
          width={40}
          height={45}
        />
      </div>
      <div
        className={` ${getBackgroundColor(
          index
        )}  d-flex justify-content-center align-items-center`}
      >
        <Image
          src={`${
            flex ? `/emblems/${flex.tier}.png` : "/emblems/UNRANKED.png"
          }`}
          alt="emblem"
          width={40}
          height={45}
        />
      </div>
      {index === team.data.length - 1 ? (
        <div className={partyStyles.btn__container}>
          <div onClick={handleClick} className={partyStyles.btn__join}>
            JOIN
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default RowPlayer;

const getBackgroundColor = (index: number) => {
  return index % 2 ? partyStyles.light : partyStyles.dark;
};
