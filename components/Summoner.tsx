import summonerStyles from "../styles/Summoner.module.scss";
import Spinner from "react-bootstrap/Spinner";
import Image from "next/image";
import { selectedSummoner, setActiveUser } from "../redux/summoner/actions";
import { setCurrentRecipient } from "../redux/chat/actions";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { rejectSummonerRequest } from "../handlers/lolapi";
import { useState, useEffect } from "react";

export interface SummonerProps {
  name: string;
  soloq: string;
  flex: string;
  id: string;
  region?: string;
  profileIconId: string;
  level: string;
  canDelete?: boolean;
  isClickeable?: boolean;
  onHover?: boolean;
  cursorPointer: boolean;
  isForChat: boolean;
  isNameClickeable: boolean;
}

const Summoner: React.FC<SummonerProps> = ({
  name,
  canDelete,
  id: summonerId,
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
}: SummonerProps) => {
  const [newMessagesCounter, setNewMessagesCounter] = useState(0);

  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useAppDispatch();
  const accountSelected = useAppSelector(
    (state) => state.summonerReducer.summoner
  );
  const currentRecipient = useAppSelector(
    (state) => state.chatReducer.currentRecipient
  );
  const chatReducer = useAppSelector((state) => state.chatReducer);
  const activeUser = useAppSelector(
    (state) => state.summonerReducer.activeUserId
  );
  const handleReject = async () => {
    setIsLoading(true);
    await rejectSummonerRequest(summonerId, activeUser);
    setIsLoading(false);
  };

  useEffect(() => {
    if (chatReducer) {
      setNewMessagesCounter(
        chatReducer?.chats.find((conversation) =>
          conversation.chatId.includes(summonerId)
        )?.newMessages
      );
    }
  }, [chatReducer]);

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
    dispatch(setActiveUser(summonerId, "solicitude"));
  };

  const onChatSelect = (e) => {
    if (e.target.id !== "incorrect") {
      dispatch(setCurrentRecipient(summonerId, name));
    }
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
              currentRecipient == summonerId
                ? summonerStyles.account__selected
                : ""
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
          isLoading ? (
            <Spinner
              animation="border"
              className={summonerStyles.spinner__incorrect}
            />
          ) : (
            <div
              onClick={handleReject}
              id="incorrect"
              className={summonerStyles.incorrect}
            >
              X
            </div>
          )
        ) : (
          ""
        )}
        {isForChat && newMessagesCounter !== 0 ? (
          <span className={summonerStyles.new__messages}>
            {newMessagesCounter <= 99 ? newMessagesCounter : "99+"}
          </span>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Summoner;
