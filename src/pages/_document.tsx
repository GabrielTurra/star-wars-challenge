import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          <link
            rel="shortcut icon"
            href="./assets/favicon.png"
            type="image/png"
          />

          <meta name="theme-color" content="#08080a" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="#08080a"
          />
          <meta name="msapplication-navbutton-color" content="#08080a" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
