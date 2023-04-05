import Head from "next/head";
import HeaderView from "../../components/HeaderView";
import Button from "../../components/Button";
import Markdown from "../../components/Markdown";
import { CursorClickIcon, MailIcon } from "@heroicons/react/outline";

const { createBucketClient } = require("@cosmicjs/sdk");

const BUCKET_SLUG = process.env.NEXT_PUBLIC_COSMIC_SLUG;
const READ_KEY = process.env.NEXT_PUBLIC_COSMIC_READ_KEY;

const cosmic = createBucketClient({
  slug: BUCKET_SLUG,
  read_key: READ_KEY,
});

export default async function About() {

      const data = await cosmic.objects
      .findOne({
            id: "641b3fead0ab1034f2469bf2",
          })
      .props("title,metadata");

  const about = await data.object;

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
        <div className="mx-auto mt-8 flex w-full justify-center space-x-4 pt-8">
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
