import Aside from "../Aside/Aside";
import { navItems } from "../../data/navItems";
import { BiMenu } from "react-icons/bi";
import { useState } from "react";
import { AnimatePresence } from "motion/react";

export default function Header() {
  const [asideView, setAsideView] = useState(false);
  function toggleAside() {
    setAsideView((prev) => !prev);
  }
  return (
    <>
      <AnimatePresence>
        {asideView && <Aside toggleAside={toggleAside} />}
      </AnimatePresence>
      <header className="fixed w-full items-center flex justify-between sm:justify-around px-8 py-3 shadow bg-white z-50">
        <p>logo</p>
        <BiMenu className="text-3xl sm:hidden" onClick={toggleAside} />
        <nav className="hidden sm:block">
          <ul className="flex gap-5 md:gap-8 lg:gap-12 xl:gap-16">
            {navItems.map((item) => (
              <li>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
