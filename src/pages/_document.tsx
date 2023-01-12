import { Children } from "react";
import { CssBaseline } from "@nextui-org/react";
import Document, { Html, Main, Head, NextScript } from "next/document";

import type { DocumentContext, DocumentInitialProps } from "next/document";

const MyDocument = () => {
  return (
    <Html>
      <Head>{CssBaseline.flush()}</Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (
  ctx: DocumentContext
): Promise<DocumentInitialProps> => {
  const initialProps = await Document.getInitialProps(ctx);
  return {
    ...initialProps,
    styles: Children.toArray([initialProps.styles]),
  };
};

export default MyDocument;
