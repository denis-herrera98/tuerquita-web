import chatStyles from "../../styles/Chat.module.scss";
import Chat from "../../components/Chat";
import PartyChatColumn from "../../components/ChatColumn";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import firebase from "../../services/firebase";
import {
  createConversation,
  setCurrentRecipient,
} from "../../redux/chat/actions";
import { useDocument } from "react-firebase-hooks/firestore";
import SelectAccount from "../../components/Account";
import {
  addSummonerRequest,
  updateSummonerRequest,
  rejectSummonerRequest,
} from "../../handlers/lolapi";
import { setActiveRegion } from "../../redux/summoner/actions";

import Swal from "sweetalert2/dist/sweetalert2.js";

const Party: React.FC = () => {
  const router = useRouter();
  const { id: partyId } = router.query;
  const accountSelected = useAppSelector(
    (state) => state.summonerReducer.summoner
  );

  const [snapshot, loading, error] = useDocument(
    firebase.firestore().doc(`lkfteam/${partyId}`),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setActiveRegion(snapshot?.data().region));

    if (snapshot?.data().rejectedPlayers?.includes(accountSelected?.id)) {
      Swal.fire({
        title: "Lo sentimos, usted ha sido rechazado",
        icon: "error",
        showConfirmButton: false,
      }).then(() => {
        router.replace("/partys/");
      });
    }

    async function createRequest() {
      try {
        const result = await addSummonerRequest(
          accountSelected,
          partyId.toString()
        );
        return result;
      } catch (e) {
        console.log(e);
      }
    }

    if (accountSelected && partyId) {
      createRequest().then((wasRejected) => {
        if (wasRejected) {
          Swal.fire({
            title: "Error...",
            text: "No se pudo crear la solicitud",
            icon: "error",
            showConfirmButton: false,
          }).then(() => {
            router.replace("/partys/");
          });
        } else {
          dispatch(createConversation(partyId.toString(), accountSelected.id));
          dispatch(setCurrentRecipient(partyId.toString()));
        }
      });
    }

    return () => {
      if (accountSelected && partyId) {
        updateSummonerRequest(
          accountSelected.id,
          partyId.toString(),
          "inactive"
        );
      }
    };
  }, [accountSelected, partyId, snapshot]);

  return (
    <>
      {accountSelected ? (
        <div className={chatStyles.container}>
          <PartyChatColumn
            tittle="TEAM"
            data={snapshot?.data()}
            error={error}
            loading={loading}
          />
          <Chat />
        </div>
      ) : (
        <SelectAccount />
      )}
    </>
  );
};

export default Party;
