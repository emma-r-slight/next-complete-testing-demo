import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import type { ReactElement } from "react";

export default class Document extends NextDocument {
  render(): ReactElement {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
