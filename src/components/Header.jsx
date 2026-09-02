import { useState } from "react";
import NavLink from "./NavLink";
import { Link as LinkScroll } from "react-scroll";
import clsx from "clsx";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 z-50 w-full py-10">
      <div className="container flex h-14 items-center max-lg:px-5 justify-between">
        <a className="lg:hidden z-2 cursor-pointer w-fit">
          <img src="/images/xora.svg" alt="xora" width={115} height={55} />
        </a>
        <div
          className={clsx(
            "w-full max-lg:fixed max-lg:top-0 max-lg:left-0 max-lg:w-full max-lg:bg-s2 max-lg:opacity-0",
            isOpen ? "max-lg:opacity-100" : "max-lg:pointer-events-none",
          )}
        >
          <div className="w-full max-lg:relative max-lg:flex max-lg:flex-col max-lg:min-h-screen max-lg:p-6 max-lg:overflow-hidden sidebar-before max-md:px-4 ">
            <nav className="max-lg:relative max-lg:z-2 max-lg:my-auto">
              <ul className="flex max-lg:block max-lg:px-12">
                <li className="nav-li">
                  <NavLink title="features" />
                  <div className="dot" />
                  <NavLink title="pricing" />
                </li>
                <li className="nav-logo">
                  <LinkScroll
                    to="hero"
                    offset={-100}
                    spy
                    smooth
                    className={clsx("max-lg:hidden")}
                  >
                    <img
                      src="/images/xora.svg"
                      alt="xora"
                      width={160}
                      height={55}
                    />
                  </LinkScroll>
                </li>
                <li className="nav-li">
                  <NavLink title="faq" />
                  <div className="dot" />
                  <NavLink title="download" />
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <button
          className="lg:hidden z-2 size-10 border-2 border-s4/25 rounded-full flex justify-center items-center"
          onClick={() => {
            setIsOpen((prev) => !prev);
          }}
        >
          <img
            src={`/images/${isOpen ? "close" : "magic"}.svg`}
            alt="magic"
            className="size-1/2 object-contain cursor-pointer"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
