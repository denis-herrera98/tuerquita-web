import Nav from "./Nav";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main>
        <Header />
        {children}
      </main>
    </>
  );
};

export default Layout;
