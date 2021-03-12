import navStyles from "../styles/Nav.module.scss";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <nav className={navStyles.navbar}>
      <ul>
        <li>Tuerquita</li>
        <li className={navStyles.command__bottom}>
          <ScrollLink
            activeClass="active"
            to="commands__section"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Comandos
          </ScrollLink>
        </li>
        <li>
          <a
            target="_blank"
            href="https://discord.com/api/oauth2/authorize?client_id=681661025057243177&permissions=1879333904&scope=bot"
            className={navStyles.text__decoration__none}
          >
            GET TUERQUITA
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
