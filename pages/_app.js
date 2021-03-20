import "../styles/globals.scss";
import Layout from "../components/Layout";
import { initFirebase } from "../services/firebase";

initFirebase();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
