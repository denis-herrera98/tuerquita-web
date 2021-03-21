import chatStyles from "../../styles/Chat.module.scss";
import Chat from "../../components/Chat";
import PartyChatColumn from "../../components/ChatColumn";
import { useRouter } from "next/router";

const Party = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className={chatStyles.container}>
      <PartyChatColumn id={id as string} />
      <Chat msgTo="UnSobito" messages={[]} />
    </div>
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
