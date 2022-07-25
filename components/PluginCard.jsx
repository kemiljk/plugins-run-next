import React from "react";
import Tag from "./Tag";
import Image from "next/image";
import { ExternalLinkIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const PluginCard = (props) => {
  const { title, subtitle, tag, color, image, link } = props;

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
      <div className="flex w-full items-center gap-4">
        <headline className="text-md block font-bold text-neutral-700 dark:text-neutral-200">
          {title}
        </headline>
        <div
          className={classNames(
            "flex w-max items-center justify-center rounded-lg border px-3 py-1 font-mono text-xs font-normal uppercase",
            color
          )}
        >
          {tag}
        </div>
      </div>
      <subheadline className="block font-mono text-sm text-neutral-500 dark:text-neutral-400">
        {subtitle}
      </subheadline>
    </a>
  );
};

export default PluginCard;
