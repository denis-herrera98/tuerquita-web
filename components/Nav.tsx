import navStyles from "../styles/Nav.module.scss";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className={navStyles.navbar}>
      <ul>
        <li>
          <Link href="/">Tuerquita</Link>
        </li>
        <li>
          <Link href="/about">Comandos</Link>
        </li>
        <li>
          <Link href="/blog/hello-world">GET TUERQUITA</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
