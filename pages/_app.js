import GlobalStyle from "../components/GlobalStyle";
import SiteHeader from "../components/SiteHeader";
import PlausibleProvider from "next-plausible";

function MyApp({ Component, pageProps }) {
  return (
    <PlausibleProvider domain="pride.dev">
      <div className="page">
        <SiteHeader />
        <Component {...pageProps} />
        <GlobalStyle />
      </div>
    </PlausibleProvider>
  );
}

export default MyApp;
