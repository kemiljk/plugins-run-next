import Head from "next/head";
import HeaderView from "../components/HeaderView";

export default function FigJam() {
  const title = "FigJam";
  return (
    <>
      <Head>
        <title>FigJam</title>
      </Head>
      <HeaderView>{title}</HeaderView>
    </>
  );
}
