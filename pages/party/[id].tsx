import { GetStaticPaths, GetStaticProps } from "next";
import chatStyles from "../../styles/Chat.module.scss";
import { getTeamById, getLastestTeams } from "../../handlers/lolapi";
import SummonerComponentCreator from "../../logic/summoner";
import { Col } from "react-bootstrap";

const Party = ({ team }) => {
  return (
    <div className={chatStyles.container}>
      <div className={chatStyles.left__column}>
        <p>
          Buscamos uno para fflex, minimo challengerflex, minimo challengerflex,
          minimo challengerlex, minimo challenger
        </p>
        <h4>TEAM</h4>
        {SummonerComponentCreator(team)}
      </div>
      <div className={chatStyles.chat__container}>
        <div className={chatStyles.chat__background}>
          <div className={chatStyles.text__field}> Message to Don as</div>
          <Col md={6} className={`${chatStyles.col__response}`}>
            <div
              className={`${chatStyles.chat__bubble}  ${chatStyles.response}`}
            >
              {team.info}
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

export const getStaticProps: GetStaticProps<any> = async (ctx) => {
  const id = ctx.params.id as string;
  const team = await getTeamById(id);
  return { props: { team } };
};

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  const teams = await getLastestTeams();

  const paths = teams.map((team: any) => {
    return { params: { id: team.id.toString() } };
  });

  return {
    fallback: true,
    paths,
  };
};
