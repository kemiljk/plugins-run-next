import React from "react";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PluginCard = ({ title, subtitle, image, link, tags }) => {
  const validTags = Object.entries(...tags).map((entry) => {
    return entry[1] === true ? entry[0] : null;
  });

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
      <div className="flex w-full items-center gap-2">
        <headline className="text-md mr-2 block font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </headline>
        {validTags.map((tag, id) => {
          if (tag === null) return;
          return (
            <div
              key={id}
              className={classNames(
                "flex w-max items-center justify-center rounded-lg border px-3 py-1 font-mono text-xs font-normal uppercase",
                tag === "figma"
                  ? "border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-900/30 dark:text-blue-200"
                  : "border border-pink-200 bg-pink-50 text-pink-700 dark:border-pink-900 dark:bg-pink-900/30 dark:text-pink-200"
              )}
            >
              {tag === "figma" ? "Figma" : "FigJam"}
            </div>
          );
        })}
      </div>
      <subheadline className="block font-mono text-sm text-neutral-500 dark:text-neutral-400">
        {subtitle}
      </subheadline>
    </a>
  );
};

export default PluginCard;
