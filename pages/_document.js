import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
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
            content="https://pride.dev/prideflagapi.jpg"
          />
          <meta property="og:url" content="https://pride.dev" />
          <meta name="twitter:card" content="summary_large_image" />

          <meta property="og:site_name" content="Pride dot dev" />

          <meta name="twitter:site" content="@joehart" />
          <meta name="twitter:creator" content="@joehart" />
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
