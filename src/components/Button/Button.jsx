import { aboutData } from "../../data/about";
import { FaWhatsapp } from "react-icons/fa";
export default function Button({ text = "Contato", className }) {
  return (
    <a
      href={aboutData.whatsappLink}
      target="_blank"
      className={`${className} text-white px-12 py-2 rounded flex gap-2 items-center w-fit bg-pink-400`}
    >
      {text}
      <FaWhatsapp />
    </a>
  );
}
