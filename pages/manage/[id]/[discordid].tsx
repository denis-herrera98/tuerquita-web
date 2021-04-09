import { useRouter } from "next/router";
import chatStyles from "../../../styles/Chat.module.scss";
import Chat from "../../../components/Chat";
import ManagePartyColumn from "../../../components/ManagePartyColumn";
import { useAppDispatch } from "../../../redux/hooks";
import { setActiveUser } from "../../../redux/summoner/actions";
import { useEffect } from "react";

export const ManageParty: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();

  useEffect(() => {
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
