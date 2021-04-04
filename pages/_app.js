import "../styles/globals.scss";
import Layout from "../components/Layout";
import { store } from "../redux/store";
import { Provider } from "react-redux";
import { initFirebase } from "../services/firebase";
import SocketProvider from "../contexts/SocketProvider";

initFirebase();

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <SocketProvider>
          <Component {...pageProps} />
        </SocketProvider>
      </Provider>
    </Layout>
  );
}

export default MyApp;
