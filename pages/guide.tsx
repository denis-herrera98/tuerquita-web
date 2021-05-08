import { Container } from "react-bootstrap";
import guideStyles from "../styles/Guide.module.scss";
import Image from "next/image";

const Guide: React.FC = () => {
  return (
    <Container className={guideStyles.container}>
      <h5>Guía para utilizar el buscador de grupos </h5>
      <ul>
        <ol>
          <li>Añade a Tuerquita a tu servidor de Discord</li>
          <ul>
            <a
              target="_blank"
              href="https://discord.com/api/oauth2/authorize?client_id=681661025057243177&permissions=1879333904&scope=bot"
            >
              Click aquí para añadir
            </a>
          </ul>
          <li>Agregar la región a tu servidor</li>
          <ul>
            <p>
              Por ejemplo, si quieres que a tu servidor se le notifique cuando
              se busca jugadores en la región LAN, escribe
            </p>
            <Image
              src="/addregion.png"
              alt="img-add"
              width="257"
              height="128"
            />
            <p>Para eliminar la región</p>
            <Image
              src="/delregion.png"
              alt="img-del"
              width="257"
              height="126"
            />
          </ul>
          <li>¡Todo listo! Ahora empieza a buscar nuevos compañeros </li>
          <ul>
            <p>
              Si quieres crear un grupo solamente tienes que utilizar el comando
              search, por ejemplo
            </p>
            <Image src="/search.png" alt="search" width="784" height="59" />
            <div>
              <p>
                Escribe un mensaje y después menciona tus compañeros de equipo.
                Para esto los mencionados tienen que haber linkeado su cuenta de
                Discord con la de League Of Legends mediante el comando
                <span className={guideStyles.cmd__ad}> t! add</span>
              </p>
            </div>
            <p>
              Tuerquita enviará un mensaje a cada grupo de Discord perteneciente
              a la región de los jugadores mencionados
            </p>
            <Image
              src="/searchmsg.png"
              alt="searchmsg"
              width="420"
              height="394"
            />
            <p>
              Tuerquita te enviará un mensaje con el link para administrar tu
              grupo
            </p>
            <Image src="/tqmsg.png" alt="tqmsg" width="708" height="116" />
            <p>
              Una vez entras al link, el grupo se pondrá disponible al público,
              cualquiera puede unirse!
            </p>
          </ul>
        </ol>
      </ul>
    </Container>
  );
};

export default Guide;
