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

export default function Home({ plugins }) {
  const metaTitle = "Plugins.run | Home";
  const title = "The home for Figma utility plugins";
  const subtitle =
    "A series of free utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies.";
  const description =
    "A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free.";
  const metaImage =
    "https://imgix.cosmicjs.com/a8c215c0-927a-11ec-9a4e-05fc85d83574-meta.png";

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <meta name="title" content={metaTitle} />
        <meta
          name="description"
          content="A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.plugins.run/" />
        <meta property="og:title" content={metaTitle} />
        <meta
          property="og:description"
          content="A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free."
        />
        <meta property="og:image" content={metaImage} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.plugins.run/" />
        <meta property="twitter:title" content={metaTitle} />
        <meta
          property="twitter:description"
          content="A series of simple utility plugins that allow you as a designer or developer to easily manage your day-to-day workflow and improve your efficiencies. All for free."
        />
        <meta property="twitter:image" content={metaImage} />
      </Head>
      <Logo />
      <HeaderView>{title}</HeaderView>
      <SubheaderView>{subtitle}</SubheaderView>
      <div className="flex-col px-4 lg:px-0">
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2">
          {plugins.map((made) => {
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
      type: "plugins",
    },
    props: "id,title,content,metadata",
  });
  const plugins = await data.objects;
  return {
    props: {
      plugins,
    },
  };
}
