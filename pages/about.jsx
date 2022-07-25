import Head from "next/head";
import HeaderView from "../components/HeaderView";
import SubheaderView from "../components/SubheaderView";
import Button from "../components/Button";
import { CursorClickIcon, MailIcon } from "@heroicons/react/outline";

export default function About() {
  const metaTitle = "Plugins.run | About";
  const title = "About";

  return (
    <div className="w-ful mx-auto max-w-3xl">
      <Head>
        <title>{metaTitle}</title>
      </Head>
      <HeaderView>{title}</HeaderView>
      <div>
        <SubheaderView>
          A huge set of utility plugins, made by{" "}
          <a
            className="inline-link"
            href="https://www.kejk.tech"
            target="_blank"
            rel="noreferrer"
          >
            Karl Emil James Koch
          </a>
          , for Figma and FigJam, for free.
        </SubheaderView>
        <h3 className="pt-4 text-xl font-semibold text-black dark:text-white">
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
        </p>
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
