import chatStyles from "../styles/Chat.module.scss";
import Spinner from "react-bootstrap/Spinner";
import Summoner from "./../components/Summoner";
import { useAppDispatch } from "../redux/hooks";
import { createConversation } from "../redux/chat/actions";
import firebase from "../services/firebase";
import { findRegionOPGG } from "../handlers/op_regions";
import { useCollection } from "react-firebase-hooks/firestore";

interface IProps {
  partyId: string;
}

const ManagePartyColumn: React.FC<IProps> = ({ partyId }: IProps) => {
  const [snapshot, loading, error] = useCollection(
    firebase
      .firestore()
      .collection("solicitude")
      .where("lkfteam", "==", partyId)
  );

  const dispatch = useAppDispatch();

  return (
    <div className={chatStyles.left__column}>
      <h4> SOLICITANTES </h4>
      {error ? (
        <h4> Ocurrio un error... </h4>
      ) : loading ? (
        <>
          <Spinner className="mt-5" animation="border" />
        </>
      ) : (
        <>{createSummoners(snapshot, dispatch, partyId)}</>
      )}
    </div>
  );
};

export default ManagePartyColumn;

const createSummoners = (
  data: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>,
  dispatch: any,
  authorId: string
) => {
  const summoners = [];

  data.forEach((doc) => {
    const player = doc.data();

    dispatch(createConversation(player.id, authorId));

    summoners.push(
      <Summoner
        cursorPointer={false}
        isForChat={true}
        isNameClickeable={true}
        isClickeable={true}
        canDelete={true}
        id={player.id}
        name={player.name}
        profileIconId={player.profileIconId}
        level={player.level}
        region={findRegionOPGG(player.region)}
        soloq={player.soloq}
        flex={player.flex}
        key={player.id}
      />
    );
  });

  return summoners;
};
