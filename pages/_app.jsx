import "../styles/globals.css";
import Layout from "../components/Layout";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="plugins.run">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  );
}

export default MyApp;
