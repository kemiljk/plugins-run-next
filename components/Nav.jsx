import Image from "next/image";
import NavLink from "./NavLink";
import Spacer from "./Spacer";

const Nav = () => {
  return (
    <div className="min-h-full">
      <div as="nav" className="bg-neutral-100 dark:bg-neutral-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-shrink-0 items-center">
                <Image
                  className="rounded-lg"
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
                  <NavLink href="/figma">
                    <a className="nav">Figma</a>
                  </NavLink>
                  <NavLink href="/figjam">
                    <a className="nav">FigJam</a>
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
