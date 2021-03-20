import partyStyles from "../styles/Party.module.scss";
import Image from "next/image";
import { findRegionOPGG } from "../handlers/op_regions";
import { findFlexAndSoloqStatus } from "../helpers/find_ranked_data";

interface IProps {
  index: number;
  team: any;
  player: any;
}

const RowPlayer = ({ index, team, player }: IProps) => {
  const { soloq, flex } = findFlexAndSoloqStatus(player.rankedData);
  const region = findRegionOPGG(player.region);

  return (
    <>
      <div
        className={` ${getBackgroundColor(index)} ${
          index === team.data.length - 1 ? partyStyles.border__l : ""
        } d-flex  align-items-center p-3 `}
      >
        <a
          target="_blank"
          href={`https://${region}summoner/userName=${player.lolName}`}
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
        className={` ${getBackgroundColor(index)} ${
          index === team.data.length - 1 ? partyStyles.border__r : ""
        } d-flex justify-content-center align-items-center`}
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
    </>
  );
};
export default RowPlayer;

const getBackgroundColor = (index: number) => {
  return index % 2 ? partyStyles.light : partyStyles.dark;
};
