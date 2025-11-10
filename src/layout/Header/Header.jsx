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
      <header className="fixed w-full items-center flex justify-between sm:justify-around px-8 py-3 shadow bg-pink-500 text-white z-50">
        <img
          src="/imgs/icons/logo.png"
          alt="Logo da Padaria"
          className="w-14 -my-2.5"
        />
        <BiMenu className="text-3xl sm:hidden" onClick={toggleAside} />
        <nav className="hidden sm:block">
          <ul className="flex gap-5 md:gap-8 lg:gap-12 xl:gap-16">
            {navItems.map((item) => (
              <li className="opacity-80 hover:underline hover:scale-90 hover:opacity-100 transition">
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
