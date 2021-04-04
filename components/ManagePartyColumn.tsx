import chatStyles from "../styles/Chat.module.scss";
import Spinner from "react-bootstrap/Spinner";
import Summoner from "./../components/Summoner";
import { useAppDispatch } from "../redux/hooks";
import { createConversation, setCurrentRecipient } from "../redux/chat/actions";

interface IProps {
  error: any;
  loading: boolean;
  data: any;
  authorId: string;
}

const ManagePartyColumn = ({ error, loading, data, authorId }: IProps) => {
  const dispatch = useAppDispatch();

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
            dispatch(createConversation(player.id, authorId));

            if (index === 0) {
              dispatch(setCurrentRecipient(player.id));
            }

            return (
              <Summoner
                cursorPointer={true}
                isForChat={true}
                canDelete={true}
                isClickeable={true}
                id={player.id}
                isNameClickeable={true}
                region={player.region}
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
