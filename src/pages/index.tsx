import type { ReactElement } from "react";
import Head from "next/head";
import { Greeting } from "@/components/Greeting";

export default function Page(): ReactElement {
  return (
    <>
      <Head>
        <title>next-complete-testing-demo</title>
        <meta
          name="description"
          content="A demonstration of a complete testing setup with Next.js."
        />
      </Head>
      <Greeting />
    </>
  );
}
