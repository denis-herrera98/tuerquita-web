import { useRouter } from "next/router";
import chatStyles from "../../../styles/Chat.module.scss";
import Chat from "../../../components/Chat";
import ManagePartyColumn from "../../../components/ManagePartyColumn";
import { useAppDispatch } from "../../../redux/hooks";
import { setActiveUser } from "../../../redux/summoner/actions";
import { useEffect, useState } from "react";
import Swal from "sweetalert2/dist/sweetalert2.js";
import { getTeamById } from "../../../handlers/lolapi";

const ManageParty: React.FC = () => {
  const router = useRouter();
  const { id, discordid } = router.query;
  const dispatch = useAppDispatch();
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }

    async function fetchTeam() {
      const team = await getTeamById(id.toString(), discordid.toString());

      if (!team) {
        Swal.fire({
          title: "Error...",
          icon: "error",
          text: "Lo sentimos, ocurrió un error",
        });
        router.replace("/");
        return;
      }

      if (team.author.id !== discordid.toString()) {
        Swal.fire({
          title: "Error...",
          icon: "error",
          text: "Al parecer no eres el dueño del grupo",
        });
        router.replace("/");
        return;
      }

      if (team.active === false) {
        Swal.fire({
          title: "Grupo cerrado",
          icon: "error",
          text: "Trata creando un nuevo grupo",
        });
        router.replace("/");
        return;
      } else {
        if (showMessage) {
          Swal.fire({
            title: "No cerrar la pestaña",
            icon: "info",
            text: "Si no tendras que crear el grupo de nuevo ",
          });
          setShowMessage(false);
        }

        if (id) {
          dispatch(setActiveUser(id.toString(), "lkfteam"));
        }
      }
    }

    fetchTeam();
  }, [id, discordid, dispatch, router, showMessage]);

  if (!id) {
    return <></>;
  }

  return (
    <div className={chatStyles.container}>
      <ManagePartyColumn partyId={id.toString()} />
      <Chat />
    </div>
  );
};

export default ManageParty;
