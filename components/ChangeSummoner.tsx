import chatStyles from "../styles/Chat.module.scss";
import { useAppDispatch } from "../redux/hooks";
import { deleteSummoner } from "../redux/summoner/actions";
import { cleanAllChats } from "../redux/chat/actions";

interface IProps {
  name: string;
}

const ChangeSummoner: React.FC<IProps> = ({ name }) => {
  const dispatch = useAppDispatch();

  const changeAccount = () => {
    dispatch(deleteSummoner());
    dispatch(cleanAllChats());
  };

  return (
    <p>
      Cuenta: <span className={chatStyles.opacity__low}>{name} |</span>{" "}
      <span onClick={changeAccount} className={chatStyles.font__bold}>
        Cambiar cuenta
      </span>
    </p>
  );
};

export default ChangeSummoner;
