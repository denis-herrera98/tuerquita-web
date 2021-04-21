import navStyles from "../styles/Nav.module.scss";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import { useRouter } from "next/router";

const Nav: React.FC = () => {
  const router = useRouter();

  return (
    <nav className={`${navStyles.navbar} `}>
      <ul>
        <li>
          <Link href="/">
            <a>TUERQUITA</a>
          </Link>
        </li>

        {router.pathname === "/" ? (
          <li className={`${navStyles.command__bottom} `}>
            <ScrollLink
              activeClass="active"
              to="commands__section"
              spy={true}
              smooth={true}
              duration={500}
            >
              Comandos
            </ScrollLink>
          </li>
        ) : (
          ""
        )}

        <li>
          <Link href="/partys">
            <a>PARTYS</a>
          </Link>
        </li>

        <li>
          <a
            target="_blank"
            href="https://discord.com/api/oauth2/authorize?client_id=681661025057243177&permissions=1879333904&scope=bot"
          >
            GET TUERQUITA
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
