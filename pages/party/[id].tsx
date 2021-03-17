import { GetStaticPaths, GetStaticProps } from "next";
import chatStyles from "../../styles/Chat.module.scss";
import { getTeamById, getLastestTeams } from "../../handlers/lolapi";
import SummonerComponentCreator from "../../logic/summoner";
import Chat from "../../components/Chat";

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
      <Chat msgTo="UnSobito" />
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
