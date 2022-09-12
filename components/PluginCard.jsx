import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";
import { HeartIcon, ArrowDownIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PluginCard = ({
  title,
  subtitle,
  image,
  link,
  tags,
  installs,
  likes,
}) => {
  // const validTags = Object.entries(tags).map((entry) => {
  //   return entry[1] === true ? entry[0] : null;
  // });

  const kFormatter = (num) => {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  };

  return (
    <a
      className="space-y-2 rounded-xl border border-neutral-200 p-4 transition-all ease-in-out hover:cursor-pointer hover:border-teal-600 hover:bg-neutral-50 dark:border-neutral-700 dark:hover:bg-neutral-900
    "
      href={link}
      target="_blank"
      rel="noreferrer"
    >
      <div className="flex w-full justify-between pb-2">
        <Image
          className="rounded"
          width={50}
          height={50}
          src={image}
          alt="Image of the plugin icon"
        />
        <ExternalLinkIcon width={20} height={20} className="text-neutral-500" />
      </div>
      <div className="flex flex-col w-full justify-between">
      <div className="flex flex-col w-full">
        <headline className="text-md mr-2 block font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </headline>
      <subheadline className="block font-mono text-sm text-neutral-500 dark:text-neutral-400">
        {subtitle}
      </subheadline>
      </div>
      <div className="flex items-center justify-between pt-4">
        <div className="flex w-full items-center gap-2">
          <div className="flex w-max items-center justify-center rounded-full border border-teal-200 bg-teal-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-teal-700 hover:cursor-pointer dark:border-teal-900 dark:bg-teal-900/30 dark:text-teal-200">
            <ArrowDownIcon className="mr-2 h-3 w-3 text-teal-700  dark:text-teal-200" />
            <span>{kFormatter(installs)}</span>
          </div>
          <div className="flex w-max items-center justify-center rounded-full border border-red-200 bg-red-50 px-3 py-1 font-mono text-xs font-normal uppercase leading-tight text-red-700 hover:cursor-pointer dark:border-red-900 dark:bg-red-900/30 dark:text-red-200">
            <HeartIcon className="mr-2 h-3 w-3 text-red-700  dark:text-red-200" />
            <span>{kFormatter(likes)}</span>
          </div>
        </div>
        <div>
          {tags === "design" && (
            <div
              className={classNames(
                "flex w-max items-center justify-center rounded-lg border px-3 py-1 font-mono text-xs font-normal uppercase leading-tight",
                tags === "design" &&
                  "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200"
              )}
            >
              {"Figma"}
            </div>
          )}
          {tags === "whiteboard" && (
            <div
              className={classNames(
                "flex w-max items-center justify-center rounded-lg border px-3 py-1 font-mono text-xs font-normal uppercase leading-tight",
                tags === "whiteboard" &&
                  "border border-pink-200 bg-pink-50 text-pink-700 dark:border-pink-900 dark:bg-pink-900/30 dark:text-pink-200"
              )}
            >
              {"FigJam"}
            </div>
          )}
          {tags === "design_and_whiteboard" && (
            <div className="flex items-center justify-start space-x-2">
              <div
                className={classNames(
                  "flex w-max items-center justify-center rounded-lg border px-3 py-1 font-mono text-xs font-normal uppercase leading-tight",
                  "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200"
                )}
              >
                {"Figma"}
              </div>
              <div
                className={classNames(
                  "flex w-max items-center justify-center rounded-lg border px-3 py-1 font-mono text-xs font-normal uppercase leading-tight",
                  "border border-pink-200 bg-pink-50 text-pink-700 dark:border-pink-900 dark:bg-pink-900/30 dark:text-pink-200"
                )}
              >
                {"FigJam"}
              </div>
            </div>
          )}
        </div>
        </div>
      </div>
    </a>
  );
};

export default PluginCard;
