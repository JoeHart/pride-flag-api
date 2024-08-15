import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="preload" href="/fonts.cs" as="style" />
          <link href="/fonts.css" rel="stylesheet" />
          <meta property="og:title" content="🏳️‍🌈 Pride Flag API" />
          <meta
            name="description"
            content="This is an API to list data about various LGBTQA+ Pride Flags, delivered as JSON by REST or GraphQL."
          />
          <meta
            property="og:description"
            content="This is an API to list data about various LGBTQA+ Pride Flags, delivered as JSON by REST or GraphQL."
          />
          <meta
            property="og:image"
            content="https://pride-flag.dev/prideflagapi.jpg"
          />
          <meta property="og:url" content="https://pride-flag.dev" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:site_name" content="Pride Flag dot dev" />

          <meta name="twitter:site" content="@joehart" />
          <meta name="twitter:creator" content="@joehart" />
          <link href="https://social.lol/@joehart" rel="me" />

          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
