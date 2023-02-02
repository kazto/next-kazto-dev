import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <script src="/__/firebase/8.2.1/firebase-app.js"></script>
    <script src="/__/firebase/8.2.1/firebase-analytics.js"></script>
    <script src="/__/firebase/init.js"></script>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav>
        <Link href="/">
          Home
        </Link>{" "}
        |{" "}
        <Link href="/about">
          About
        </Link>{" "}
      </nav>
    </header>
    {children}
  </div>
);

export default Layout;
