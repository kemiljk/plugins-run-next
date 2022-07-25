import React from "react";
import Head from "next/head";
import HeaderView from "../components/HeaderView";
import SubheaderView from "../components/SubHeaderView";
import PluginCard from "../components/PluginCard";

const Cosmic = require("cosmicjs");
const api = Cosmic();

const BUCKET_SLUG = "kemiljk";
const READ_KEY = "uNXYQDbNTCWQyEaFjq44PUolieGKBuzePTaEdnDl0CHLcnJtPK";

const bucket = api.bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

export default function Home({ mades }) {
  const metaTitle = "Plugins.run | Home";
  const title = "The home for Figma utility plugins";
  const subtitle =
    "A series of free utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies.";
  return (
    <>
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <HeaderView>{title}</HeaderView>
      <SubheaderView>{subtitle}</SubheaderView>
      <div className="flex-col">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {mades.map((made) => {
            return (
              <PluginCard
                key={made.id}
                image={made.metadata.cover.imgix_url}
                title={made.title}
                subtitle={made.metadata.subtitle}
                tags={made.metadata.platform}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const data = await bucket.getObjects({
    query: {
      type: "mades",
    },
    props: "id,slug,title,content,metadata",
  });
  const mades = await data.objects;
  return {
    props: {
      mades,
    },
  };
}
