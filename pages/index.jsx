import React from "react";
import Head from "next/head";
import HeaderView from "../components/HeaderView";
import SubheaderView from "../components/SubheaderView";
import PluginCard from "../components/PluginCard";
import Logo from "../components/Logo";

const Cosmic = require("cosmicjs");
const api = Cosmic();

const BUCKET_SLUG = process.env.NEXT_PUBLIC_COSMIC_SLUG;
const READ_KEY = process.env.NEXT_PUBLIC_COSMIC_READ_KEY;

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
      <Logo />
      <HeaderView>{title}</HeaderView>
      <SubheaderView>{subtitle}</SubheaderView>
      <div className="flex-col">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {mades.map((made) => {
            return (
              <PluginCard
                key={made.id}
                link={made.metadata.url}
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
