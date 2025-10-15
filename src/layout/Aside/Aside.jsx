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
        className="fixed h-screen left-0 top-0 bg-white px-6 z-100 drop-shadow-xl"
      >
        <header className="w-full flex justify-between items-center py-4 mb-6 border-b-1 border-black/40">
          <p>logo</p>
          <Close />
        </header>
        <nav>
          <ul className="flex flex-col gap-6">
            {navItems.map((item) => (
              <li>
                <a href={item.link} target="_self" className="pr-14">
                  {item.title}
                </a>
              </li>
            ))}
            <Button text="Whatsapp" />
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
