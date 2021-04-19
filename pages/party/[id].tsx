import chatStyles from "../../styles/Chat.module.scss";
import { LkfTeam } from "../../interfaces/lkfteam";
import Chat from "../../components/Chat";
import Swal from "sweetalert2/dist/sweetalert2.js";
import PartyChatColumn from "../../components/ChatColumn";
import { useRouter } from "next/router";
import firebase from "../../services/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { useState } from "react";
import SelectAccount from "../../components/Account";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect } from "react";
import { addSummonerRequest } from "../../handlers/lolapi";
import {
  createConversation,
  setCurrentRecipient,
} from "../../redux/chat/actions";

const Party: React.FC = () => {
  const router = useRouter();
  const { id: partyId } = router.query;

  const dispatch = useAppDispatch();
  const [snapshot, loading, error] = useDocument(
    firebase.firestore().doc(`lkfteam/${partyId}`)
  );

  const [showMessage, setShowMessage] = useState(true);
  const accountSelected = useAppSelector(
    (state) => state.summonerReducer.summoner
  );

  useEffect(() => {
    if (!partyId || !accountSelected) return;

    addSummonerRequest(accountSelected, partyId.toString())
      .then((canNotCreate) => {
        if (canNotCreate) {
          Swal.fire({
            title: "Error...",
            text: "No se pudo crear la solicitud",
            icon: "error",
            showConfirmButton: false,
          });
          router.replace("/partys/");
        } else {
          dispatch(createConversation(partyId.toString(), accountSelected.id));
          dispatch(
            setCurrentRecipient(partyId.toString(), "el lider del grupo")
          );
        }
      })
      .catch((e) => console.error(e));

    if (showMessage) {
      Swal.fire({
        title: "Aviso importante",
        text: "No cierres la pestaña, si no tendras que unirte de nuevo",
        icon: "info",
        showConfirmButton: false,
      });
      setShowMessage(false);
    }
  }, [partyId, accountSelected]);

  return (
    <>
      {accountSelected ? (
        <div className={chatStyles.container}>
          <PartyChatColumn
            data={snapshot?.data() as LkfTeam}
            error={error}
            partyId={partyId.toString()}
            loading={loading}
          />
          <Chat />
        </div>
      ) : (
        <SelectAccount region={snapshot?.data()?.region} />
      )}
    </>
  );
};

export default Party;
