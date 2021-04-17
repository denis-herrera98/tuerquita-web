import accountStyles from "../styles/Account.module.scss";
import regions from "../data/regions.json";
import { Col, Container } from "react-bootstrap";
import OnlyOneSummonerCreator from "../logic/accounts";
import { getSummonerData } from "../handlers/lolapi";
import { useState } from "react";
import Spinner from "react-bootstrap/Spinner";

interface IProps {
  region: string;
}

const SelectAccount: React.FC<IProps> = ({ region }: IProps) => {
  const [name, setName] = useState("");
  const [account, setAccount] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.length > 3 && region) {
      setNotFound(false);
      setIsLoading(true);
      const data = await getSummonerData(name, regions[region]);
      setIsLoading(false);
      setAccount(data);
      if (!data) {
        setNotFound(true);
      }
    }
  };

  return (
    <Container className={accountStyles.container}>
      <h4> SELECCIONE SU CUENTA</h4>
      <Col xs={10} md={8} className={accountStyles.search__field}>
        <div className={`${accountStyles.region__selector}`}>
          <div className={`${accountStyles.dropbtn}`}>
            <p> {region} </p>
            <div
              id="dropdown__content"
              className={`${accountStyles.dropdown__content}`}
            ></div>
          </div>
        </div>
        <form className={accountStyles.form__name} onSubmit={handleSubmit}>
          <input
            className={accountStyles.input__name}
            type="text"
            onChange={handleOnChange}
            name="summoner-name"
            autoComplete="off"
            placeholder="Nombre de invocador..."
          />
          <button type="submit" className={accountStyles.btn__search}>
            GO
          </button>
        </form>
      </Col>
      {!notFound ? (
        isLoading ? (
          <Spinner animation="border" />
        ) : account ? (
          <div className={accountStyles.found__accounts}>
            {OnlyOneSummonerCreator(account, region)}
          </div>
        ) : (
          ""
        )
      ) : (
        <h3> No se encontró la cuenta</h3>
      )}
    </Container>
  );
};

export default SelectAccount;
