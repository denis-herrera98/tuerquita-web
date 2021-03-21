import firebase from "../services/firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Party from "../components/Party";
import Spinner from "react-bootstrap/Spinner";

function toTimestamp() {
  const CURRENT_HOUR = new Date();
  CURRENT_HOUR.setHours(CURRENT_HOUR.getHours() - 1);
  return CURRENT_HOUR.getTime();
}

const query = firebase
  .firestore()
  .collection("lkfteam")
  .where("timestamp", ">", toTimestamp())
  .orderBy("timestamp", "desc")
  .limit(10);

const Partys = () => {
  const [querySnapshot, loading, error] = useCollection(query);
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const newTeams = [];
    querySnapshot?.forEach((doc) => {
      newTeams.push({ id: doc.id, ...doc.data() });
    });
    setTeams(newTeams);
  }, [querySnapshot]);

  return (
    <Container>
      <h4 className="my-5 text-center"> GRUPOS DISPONIBLES </h4>
      <Row>
        {error ? (
          <h4 className="text-center"> Lo sentimos, ha ocurrido un error...</h4>
        ) : loading ? (
          <Spinner className="m-auto" animation="border" />
        ) : (
          teams.map((team, index) => {
            return (
              <Col key={index} lg={6}>
                <Party team={team} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default Partys;