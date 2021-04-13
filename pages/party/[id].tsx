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

import Swal from "sweetalert2/src/sweetalert2.js";

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
    if (snapshot?.data().rejectedPlayers?.includes(accountSelected?.id)) {
      Swal.fire({
        title: "Lo sentimos, usted ha sido rechazado",
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
            title: "Lo sentimos, usted ha sido rechazado",
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

/*
export const getStaticProps: GetStaticProps<any> = async (ctx) => {
  const id = ctx.params.id as string;
  if (id === "0") {
    return { props: { team: null } };
  }
  const team = await getTeamById(id);
  return { props: { team } };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const teams = await getLastestTeams();

  if (!teams) {
    const paths = { params: { id: "0" } };

    return {
      fallback: true,
      paths,
    };
  }

  const paths = teams.map((team: any) => {
    return { params: { id: team.id.toString() } };
  });

  return {
    fallback: true,
    paths,
  };
};
*/
