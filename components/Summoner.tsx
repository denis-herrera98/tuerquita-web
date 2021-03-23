import summonerStyles from "../styles/Summoner.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import { selectedSummoner } from "../redux/summoner/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface IProps {
  name: string;
  soloq: string;
  flex: string;
  id: string;
  region: string;
  profileIconId: string;
  level: string;
  canDelete?: boolean;
  leader?: boolean;
  onHover?: boolean;
  interactive?: boolean;
}

const Summoner = ({
  name,
  canDelete,
  id,
  leader,
  level,
  soloq,
  region,
  flex,
  onHover,
  interactive,
  profileIconId,
}: IProps) => {
  const dispatch = useAppDispatch();
  const accountSelected = useAppSelector(
    (state) => state.summonerReducer.summoner
  );

  const router = useRouter();
  const { redirect } = router.query;

  const handleSelect = () => {
    dispatch(
      selectedSummoner({ name, id, soloq, flex, region, profileIconId, level })
    );
    router.push(`/party/${redirect}`);
  };

  return (
    <div
      className={`${onHover ? summonerStyles.hover__effect : ""} ${
        summonerStyles.container
      } ${accountSelected?.id == id ? summonerStyles.account__selected : ""}`}
      onClick={interactive ? handleSelect : null}
    >
      <div className={summonerStyles.grid}>
        <div className={summonerStyles.profile__picture}>
          <Image
            className={summonerStyles.profile__picture}
            src={`http://ddragon.leagueoflegends.com/cdn/11.6.1/img/profileicon/${profileIconId}.png`}
            alt="ProfilePicture"
            width={100}
            height={100}
          />
        </div>
        <div className={summonerStyles.name}>
          <a
            target="_blank"
            href={`https://${region}summoner/userName=${name}`}
          >
            {name}
          </a>
          <p className={summonerStyles.subtitle}> Level {level} </p>
        </div>
        <div className={summonerStyles.ranked__data}>
          <div className={summonerStyles.ranked__column}>
            <Image
              className={summonerStyles.emblem}
              src={`${
                soloq ? `/emblems/${soloq}.png` : "/emblems/UNRANKED.png"
              }`}
              alt="emblem"
              width={40}
              height={45}
            />
            <p> Soloq </p>
          </div>

          <div className={summonerStyles.ranked__column}>
            <Image
              className={summonerStyles.emblem}
              src={`${flex ? `/emblems/${flex}.png` : "/emblems/UNRANKED.png"}`}
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
