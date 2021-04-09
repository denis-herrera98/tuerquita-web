import Nav from "./Nav";
import Header from "./Header";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
