import { useRouter } from "next/router";
import chatStyles from "../../../styles/Chat.module.scss";
import Chat from "../../../components/Chat";
import ManagePartyColumn from "../../../components/ManagePartyColumn";
import { useAppDispatch } from "../../../redux/hooks";
import { setActiveUser } from "../../../redux/summoner/actions";
import { useEffect } from "react";

import Swal from "sweetalert2/dist/sweetalert2.js";

const ManageParty: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  useEffect(() => {
    Swal.fire({
      title: "No cerrar la pestaña",
      icon: "info",
      text: "Si no tendras que crear el grupo de nuevo ",
      showConfirmButton: false,
    });
    if (id) {
      dispatch(setActiveUser(id.toString()));
    }
  }, [id]);

  return (
    <div className={chatStyles.container}>
      {!id ? (
        ""
      ) : (
        <>
          <ManagePartyColumn partyId={id.toString()} />
          <Chat />
        </>
      )}
    </div>
  );
};

export default ManageParty;
