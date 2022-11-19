import Image from "next/legacy/image";
import NavLink from "./NavLink";
import Spacer from "./Spacer";

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
              <div className="block rounded-[10px] bg-neutral-200 py-1 px-1 dark:border dark:border-neutral-800 dark:bg-neutral-900">
                <div className="flex items-baseline space-x-2">
                  <NavLink href="/">
                    <a className="nav">Home</a>
                  </NavLink>
                  <NavLink href="/about">
                    <a className="nav">About</a>
                  </NavLink>
                </div>
              </div>
              <Spacer />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
