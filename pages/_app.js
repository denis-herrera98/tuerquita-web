import "../styles/globals.scss";
import Layout from "../components/Layout";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { initFirebase } from "../services/firebase";

initFirebase();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  );
}

export default MyApp;
