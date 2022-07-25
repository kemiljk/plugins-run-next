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
            console.log(made.metadata.platform[0]);
            return (
              <PluginCard
                key={made.id}
                image={made.metadata.cover.imgix_url}
                title={made.title}
                subtitle={made.metadata.subtitle}
                tag={made.metadata.platform[0].figma ? "Figma" : "FigJam"}
                color={
                  made.metadata.platform[0].figma
                    ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200"
                    : "text-pink-700 dark:text-pink-200 bg-pink-50 dark:bg-pink-900/30 border border-pink-200 dark:border-pink-900"
                }
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
