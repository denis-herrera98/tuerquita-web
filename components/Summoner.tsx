import summonerStyles from "../styles/Summoner.module.scss";
import Image from "next/image";
import { selectedSummoner, setActiveUser } from "../redux/summoner/actions";
import { setCurrentRecipient } from "../redux/chat/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { rejectSummonerRequest } from "../handlers/lolapi";

interface IProps {
  name: string;
  soloq: string;
  flex: string;
  id: string;
  region?: string;
  profileIconId: string;
  level: string;
  canDelete?: boolean;
  leader?: boolean;
  isClickeable?: boolean;
  onHover?: boolean;
  cursorPointer: boolean;
  isForChat: boolean;
  isNameClickeable: boolean;
}

const Summoner: React.FC<IProps> = ({
  name,
  canDelete,
  id: summonerId,
  leader,
  level,
  soloq,
  region,
  flex,
  onHover,
  cursorPointer,
  isForChat,
  isClickeable,
  profileIconId,
  isNameClickeable,
}: IProps) => {
  const dispatch = useAppDispatch();

  const accountSelected = useAppSelector(
    (state) => state.summonerReducer.summoner
  );

  const chatSelected = useAppSelector(
    (state) => state.chatReducer.currentRecipient
  );
  const activeUser = useAppSelector(
    (state) => state.summonerReducer.activeUserId
  );

  const handleReject = () => {
    rejectSummonerRequest(summonerId, activeUser);
  };

  const handleSelect = () => {
    dispatch(
      selectedSummoner({
        name,
        id: summonerId,
        soloq,
        flex,
        region,
        profileIconId,
        level,
      })
    );
    dispatch(setActiveUser(summonerId));
  };

  const onChatSelect = () => {
    dispatch(setCurrentRecipient(summonerId));
  };

  return (
    <div
      className={`${onHover ? summonerStyles.hover__effect : ""} ${
        summonerStyles.container
      } ${
        accountSelected?.id === summonerId
          ? summonerStyles.account__selected
          : ""
      }
            ${
              chatSelected == summonerId ? summonerStyles.account__selected : ""
            }
          ${cursorPointer ? summonerStyles.cursor__pointer : ""}`}
      onClick={!isClickeable ? null : isForChat ? onChatSelect : handleSelect}
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
          {isNameClickeable ? (
            <a
              target="_blank"
              href={`https://${region}/summoner/userName=${name}`}
            >
              {name}
            </a>
          ) : (
            <p className="mb-0"> {name} </p>
          )}
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
        {canDelete ? (
          <div onClick={handleReject} className={summonerStyles.incorrect}>
            X
          </div>
        ) : (
          ""
        )}
        {leader ? <h5 className={summonerStyles.tag__leader}>LIDER</h5> : ""}
      </div>
    </div>
  );
};

export default Summoner;
