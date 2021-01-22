import "@/styles/app.css";

import type { AppProps as NextAppProps } from "next/app";
import type { ReactElement } from "react";

if (process.env.NEXT_PUBLIC_API_MOCKING === "enabled") {
  if (typeof window === "undefined") {
    require("../mocks/server.ts");
  } else {
    require("../mocks/browser.ts");
  }
}

export default function NextApp({
  Component,
  pageProps,
}: NextAppProps): ReactElement {
  return <Component {...pageProps} />;
}
