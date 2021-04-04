import { useRouter } from "next/router";
import chatStyles from "../../../styles/Chat.module.scss";
import Chat from "../../../components/Chat";
import ManagePartyColumn from "../../../components/ManagePartyColumn";
import firebase from "../../../services/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { useAppDispatch } from "../../../redux/hooks";
import { selectedSummoner } from "../../../redux/summoner/actions";
import { useEffect } from "react";

export const ManageParty = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const [snapshot, loading, error] = useDocument(
    firebase.firestore().doc(`solicitude/${id}`)
  );

  useEffect(() => {
    if (id) {
      dispatch(
        selectedSummoner({
          name: "",
          flex: "",
          soloq: "",
          id: id?.toString(),
          level: "",
          region: "",
          profileIconId: "",
        })
      );
    }
  }, [id]);

  return (
    <div className={chatStyles.container}>
      {snapshot ? (
        <>
          <ManagePartyColumn
            data={snapshot.data()}
            authorId={id.toString()}
            error={error}
            loading={loading}
          />

          <Chat />
        </>
      ) : (
        <h4>Error...</h4>
      )}
    </div>
  );
};

export default ManageParty;
