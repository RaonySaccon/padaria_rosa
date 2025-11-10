import { navItems } from "../../data/navItems";
import { CgClose } from "react-icons/cg";
import { motion } from "motion/react";
import Button from "../../components/Button/Button";

export default function Aside({ toggleAside }) {
  function Close() {
    return (
      <button className="bg-black/20 p-2 rounded" onClick={toggleAside}>
        <CgClose />
      </button>
    );
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed left-0 top-0 h-screen w-full bg-black/30 backdrop-blur-sm z-90"
        onClick={toggleAside}
      ></motion.div>
      <motion.div
        initial={{ translateX: "-100%" }}
        animate={{ translateX: "0%" }}
        exit={{ translateX: "-100%" }}
        transition={{ ease: "easeInOut" }}
        className="fixed h-screen left-0 top-0 bg-pink-400 text-white px-6 z-100 drop-shadow-xl"
      >
        <header className="w-full flex justify-between items-center py-4 mb-6 border-b-1 border-black/40">
          <img
            src="/imgs/icons/logo.png"
            alt="Logo da Padaria"
            className="w-14 -my-2.5"
          />
          <Close />
        </header>
        <nav>
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li className="border-b-2 w-10/12 border-white/50">
                <a
                  href={item.link}
                  target="_self"
                  className="pr-14"
                  onClick={toggleAside}
                >
                  {item.title}
                </a>
              </li>
            ))}
            <Button text="Whatsapp" className="bg-pink-500" />
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
