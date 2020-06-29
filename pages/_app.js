import GlobalStyle from "../components/GlobalStyle";
import SiteHeader from "../components/SiteHeader";
function MyApp({ Component, pageProps }) {
  return (
    <div className="page">
      <SiteHeader />
      <Component {...pageProps} />
      <GlobalStyle />
    </div>
  );
}

export default MyApp;
