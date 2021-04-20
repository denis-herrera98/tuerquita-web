import firebase from "../services/firebase";
import regions from "../data/regions.json";
import searchStyles from "../styles//components/Search.module.scss";
import { useCollection } from "react-firebase-hooks/firestore";
import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import Party from "../components/Party";
import Spinner from "react-bootstrap/Spinner";

const Partys: React.FC = () => {
  const [teams, setTeams] = useState([]);
  const [region, setRegion] = useState("LAN");

  const [querySnapshot, loading, error] = useCollection(
    firebase
      .firestore()
      .collection("lkfteam")
      .where("region", "==", region)
      .where("active", "==", true)
      .orderBy("timestamp", "desc")
      .limit(15)
  );

  const handleSelect = (value: string) => {
    setRegion(value);
  };

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
      <div className={searchStyles.search__field}>
        <p className="m-5">Ver: </p>

        <div className={`${searchStyles.region__selector}`}>
          <div className={`${searchStyles.dropbtn}`}>
            <p> {region} </p>
            <div
              id="dropdown__content"
              className={`${searchStyles.dropdown__content}`}
            >
              {Object.keys(regions).map((value: string, i) => {
                return (
                  <a key={i} onClick={() => handleSelect(value)}>
                    {value}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Row>
        {error ? (
          <h4 className="text-center"> Lo sentimos, ha ocurrido un error...</h4>
        ) : loading ? (
          <Spinner className="m-auto mt-5 " animation="border" />
        ) : querySnapshot.empty ? (
          <p className="text-center mt-5">
            No hay grupos disponibles en este momento{" "}
          </p>
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
