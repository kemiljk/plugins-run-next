import Head from "next/head";
import HeaderView from "../components/HeaderView";

export default function About() {
  const title = "About";
  return (
    <>
      <Head>
        <title>About</title>
      </Head>
      <HeaderView>{title}</HeaderView>
    </>
  );
}
