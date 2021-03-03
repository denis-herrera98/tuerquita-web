import navStyles from "../styles/Nav.module.scss";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  return (
    <nav className={navStyles.navbar}>
      <ul>
        <li>Tuerquita</li>
        <li>
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
          <Link href="/blog/hello-world">
            <a className={navStyles.text__decoration__none}> GET TUERQUITA </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
