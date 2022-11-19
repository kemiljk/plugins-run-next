import Head from "next/head";
import HeaderView from "../components/HeaderView";
import Button from "../components/Button";
import Markdown from "../components/Markdown";
import { CursorClickIcon, MailIcon } from "@heroicons/react/outline";

const Cosmic = require("cosmicjs");
const api = Cosmic();

const BUCKET_SLUG = process.env.NEXT_PUBLIC_COSMIC_SLUG;
const READ_KEY = process.env.NEXT_PUBLIC_COSMIC_READ_KEY;

const bucket = api.bucket({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

export default function About({ about }) {
  const metaTitle = "Plugins.run | About";
  return (
    <div className="mx-auto w-full max-w-3xl">
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderView>{about.title}</HeaderView>
      <div className="px-4 lg:px-0">
        <Markdown
          content={about.metadata.subtitle}
          className="text-left md:text-center"
        />
        <Markdown content={about.metadata.content} />
        <div className="mx-auto mt-8 flex w-full justify-center space-x-4">
          <Button
            bgColor="neutral-100"
            textColor="black"
            borderColor="neutral-200"
            darkBgColor="neutral-800"
            darkTextColor="white"
            darkBorderColor="neutral-700"
          >
            <MailIcon width={24} height={24} />
            <a href="mailto:karl@kejk.tech?subject=Let's chat">Contact me</a>
          </Button>
          <Button
            bgColor="neutral-100"
            textColor="black"
            borderColor="neutral-200"
            darkBgColor="neutral-800"
            darkTextColor="white"
            darkBorderColor="neutral-700"
          >
            <CursorClickIcon width={24} height={24} />
            <a href="mailto:karl@kejk.tech?subject=Plugin request">
              Request a plugin
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const data = await bucket.getObjects({
    query: {
      type: "about",
      slug: "what-is-pluginsrun",
    },
    props: "title,content,metadata",
  });
  const about = await data.objects[0];
  return {
    props: {
      about,
    },
  };
}
