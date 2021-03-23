import { useRouter } from "next/router";
import firebase from "../../../services/firebase";
import { useDocument } from "react-firebase-hooks/firestore";
import { GetStaticPaths, GetStaticProps } from "next";
import { getTeamById, getLastestTeams } from "../../../handlers/lolapi";

export const ManageParty = () => {
  const router = useRouter();
  const { id, discordid } = router.query;
  const [value, loading, error] = useDocument(
    firebase.firestore().doc(`solicitude/${id}`)
  );
  return <div> casdsadasd</div>;
};

export default ManageParty;
