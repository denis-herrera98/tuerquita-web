import chatStyles from "../styles/Chat.module.scss";
import { useRouter } from "next/router";
import Spinner from "react-bootstrap/Spinner";
import Summoner from "./../components/Summoner";
import { useAppDispatch } from "../redux/hooks";
import firebase from "../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { createConversation } from "../redux/chat/actions";
import { useEffect, useState } from "react";
import { desactiveParty } from "../handlers/lolapi";
import { shortRegionNameToOPGGPath } from "../handlers/op_regions";

interface IProps {
  partyId: string;
}

const ManagePartyColumn: React.FC<IProps> = ({ partyId }: IProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [snapshot, loading, error] = useCollection(
    firebase
      .firestore()
      .collection("solicitude")
      .where("lkfteam", "==", partyId)
      .where("state", "==", "ACTIVE")
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (snapshot) {
      snapshot.forEach((doc) => {
        dispatch(createConversation(doc.data().id, partyId));
      });
    }
  }, [snapshot, dispatch, partyId]);

  const handleOnClick = async () => {
    setIsLoading(true);
    await desactiveParty(partyId);
    setIsLoading(false);
    router.replace("/");
  };

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
        <div className={chatStyles.summoners__container}>
          {createSummoners(snapshot)}
        </div>
      )}
      <div className={chatStyles.finish__bottom} onClick={handleOnClick}>
        {isLoading ? <Spinner animation="border" /> : "LISTO"}
      </div>
    </div>
  );
};

export default ManagePartyColumn;

const createSummoners = (
  data: firebase.firestore.QuerySnapshot<firebase.firestore.DocumentData>
) => {
  const summoners = [];

  data.forEach((doc) => {
    const player = doc.data();

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
        region={shortRegionNameToOPGGPath(player.region)}
        soloq={player.soloq}
        flex={player.flex}
        key={player.id}
      />
    );
  });

  return summoners;
};
