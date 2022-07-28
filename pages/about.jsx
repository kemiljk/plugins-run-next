import Head from "next/head";
import HeaderView from "../components/HeaderView";
import SubheaderView from "../components/SubheaderView";
import Button from "../components/Button";
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
  // const title = "What is Plugins.run?";
  console.log(about);
  return (
    <div className="mx-auto w-full max-w-3xl">
      <Head>
        <title>{metaTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderView>{about.title}</HeaderView>
      <SubheaderView>{about.metadata.subtitle}</SubheaderView>
      <div className="px-4 lg:px-0">
        <p>{about.metadata.content}</p>
        {/* <h3 className="pt-4 text-xl font-semibold text-black dark:text-white">
          {"How it started"}
        </h3>
        <p>
          {
            "I started writing Figma plugins when I wanted to better learn Javascript. I did a Udemy course led by Morten Rand-Hendriksen on "
          }
          <a
            className="inline-link"
            href="https://www.linkedin.com/learning/javascript-essential-training/javascript-the-soil-from-which-the-modern-web-grows?autoplay=true"
            target="_blank"
            rel="noreferrer"
          >
            Javascript basics
          </a>
          {", and in that course we made a Pixel to Em converter."}
        </p>
        <p>
          {
            "Once I decided I really wanted to build out my own Figma plugin to scratch the itch of easily converting the output pixels into em/rem. And this is how Hand››over ended up being born."
          }
        </p>
        <p>
          {
            "Hand››over started with the ability to input a value and output it as em. Over time I built out functionality to include the current  selection values which started just as text and size but soon expanded to more and more things as I got to understand the Figma API."
          }
        </p>
        <h3 className="pt-8 text-xl font-semibold text-black dark:text-white">
          {"How it's going"}
        </h3>
        <p>
          {
            "Since that first plugin, released back in 2020, I've released 16 further utility plugins. The goal of these is to provide small solutions to common problems."
          }
        </p>
        <p>
          {"I see each of my plugins as an opportunity for Figma to "}
          <a
            href="https://www.howtogeek.com/297651/what-does-it-mean-when-a-company-sherlocks-an-app/"
            className="inline-link"
            target="_blank"
            rel="noreferrer"
          >
            Sherlock me
          </a>
          {
            " and I'd be genuinely happy if they did. That's why I keep each of my plugins completely, 100% free. These are an admission that core functionality is missing and I'd love to see the day each one is slowly added in to the core Figma and/or FigJam experience."
          }
        </p> */}
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
