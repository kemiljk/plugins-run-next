"use client";

import Image from "next/image";
// import NavLink from "./NavLink";
import Link from "next/link";
import { Tab } from "@headlessui/react";
import Spacer from "./Spacer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const tabItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
];

const Nav = () => {
  return (
    <div className="fixed top-0 z-50 w-full">
      <div as="nav" className="bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-shrink-0 items-center ">
                <Image
                  className="rounded-lg"
                  height={32}
                  width={32}
                  src="/plugins-run.svg"
                  alt="Logo"
                />
              </div>
              <Tab.Group className="block space-x-2 rounded-[10px] bg-neutral-200 py-1 px-1 dark:border dark:border-neutral-800 dark:bg-neutral-900">
                <Tab.List>
                  {tabItems.map((item, idx) => (
                    <Link href={item.href} key={idx}>
                      <Tab
                        className={({ selected }) =>
                          classNames(
                            "rounded px-3 py-2 text-sm font-medium text-neutral-600 hover:text-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 border border-transparent",
                            "focus:border focus:border-teal-500 focus:outline-none",
                            selected
                              ? "bg-white shadow text-black dark:bg-neutral-700 dark:text-white"
                              : "hover:bg-white/[0.12] hover:text-black dark:hover:text-white"
                          )
                        }
                      >
                        {item.name}
                      </Tab>
                    </Link>
                  ))}
                </Tab.List>
              </Tab.Group>
              <Spacer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
