import { useRouter } from "next/router";
import chatStyles from "../../../styles/Chat.module.scss";
import Chat from "../../../components/Chat";
import ManagePartyColumn from "../../../components/ManagePartyColumn";
import firebase from "../../../services/firebase";
import { useDocument } from "react-firebase-hooks/firestore";

export const ManageParty = () => {
  const router = useRouter();
  const { id, discordid } = router.query;
  const [snapshot, loading, error] = useDocument(
    firebase.firestore().doc(`solicitude/${id}`)
  );

  return (
    <div className={chatStyles.container}>
      {snapshot ? (
        <>
          <ManagePartyColumn
            data={snapshot.data()}
            error={error}
            loading={loading}
          />

          <Chat msgTo="UnSobito" messages={[]} />
        </>
      ) : (
        <h4>Error...</h4>
      )}
    </div>
  );
};

export default ManageParty;
