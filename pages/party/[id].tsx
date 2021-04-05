import chatStyles from "../../styles/Chat.module.scss";
import Chat from "../../components/Chat";
import PartyChatColumn from "../../components/ChatColumn";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import firebase from "../../services/firebase";
import {
  createConversation,
  setCurrentRecipient,
} from "../../redux/chat/actions";
import { useDocumentOnce } from "react-firebase-hooks/firestore";
import SelectAccount from "../../components/Account";

const Party = () => {
  const router = useRouter();
  const { id } = router.query;
  const accountSelected = useAppSelector(
    (state) => state.summonerReducer.summoner
  );

  const [snapshot, loading, error] = useDocumentOnce(
    firebase.firestore().doc(`lkfteam/${id}`)
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(createConversation(id?.toString(), accountSelected?.id));
    dispatch(setCurrentRecipient(id?.toString()));
  }, [accountSelected, id]);

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
