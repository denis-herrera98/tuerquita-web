import { useRouter } from "next/router";
import chatStyles from "../../styles/Chat.module.scss";
import Summoner from "../../components/Summoner";
import { Col } from "react-bootstrap";

const Party = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={chatStyles.container}>
      <div className={chatStyles.left__column}>
        <p>
          Buscamos uno para fflex, minimo challengerflex, minimo challengerflex,
          minimo challengerlex, minimo challenger{" "}
        </p>
        <h4>TEAM</h4>
        <Summoner name="Don Denis" level="232" emblem="Diamond.png" />
      </div>
      <div className={chatStyles.chat__container}>
        <div className={chatStyles.chat__background}>
          <div className={chatStyles.text__field}> Message to Don as</div>
          <Col md={6} className={`${chatStyles.col__response}`}>
            <div
              className={`${chatStyles.chat__bubble}  ${chatStyles.response}`}
            >
              hola hola megustaria
            </div>
          </Col>
          <Col md={6} className={chatStyles.col__sent}>
            <div className={`${chatStyles.chat__bubble}  ${chatStyles.sent}`}>
              hola hola megustaria podre
            </div>
          </Col>
        </div>
      </div>
    </div>
  );
};

export default Party;
