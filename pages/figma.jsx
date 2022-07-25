import Head from "next/head";
import HeaderView from "../components/HeaderView";

export default function Figma() {
  const title = "Figma";
  return (
    <>
      <Head>
        <title>Figma</title>
      </Head>
      <HeaderView>{title}</HeaderView>
    </>
  );
}
