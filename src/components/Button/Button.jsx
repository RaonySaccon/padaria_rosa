import { aboutData } from "../../data/about";
import { FaWhatsapp } from "react-icons/fa";
export default function Button({ text = "Contato", className, leaked }) {
  return (
    <a
      href={aboutData.whatsappLink}
      target="_blank"
      className={` ${
        leaked
          ? "bg-transparent border-2 border-pink-500 text-pink-500"
          : "text-white"
      } px-12 py-2 rounded flex gap-2 items-center w-fit justify-center bg-pink-400 ${className}`}
    >
      {text}
      <FaWhatsapp />
    </a>
  );
}
