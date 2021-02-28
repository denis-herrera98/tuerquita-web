import Nav from "./Nav";
import Header from "./Header";
import Meta from "./Meta";
import { Container } from "react-bootstrap";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />

      <Container>
        <main>
          <Header />
          {children}
        </main>
      </Container>
    </>
  );
};

export default Layout;
