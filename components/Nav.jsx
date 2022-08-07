import Image from "next/image";
import NavLink from "./NavLink";
import Spacer from "./Spacer";

const Nav = () => {
  return (
    <div className="min-h-full fixed w-full top-0 z-50">
      <div as="nav" className="bg-white dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-shrink-0 items-center border border-neutral-200 rounded-lg">
                <Image
                  height="32px"
                  width="32px"
                  src="/plugins-run.svg"
                  alt="Logo"
                />
              </div>
              <div className="block">
                <div className="flex items-baseline space-x-4">
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
