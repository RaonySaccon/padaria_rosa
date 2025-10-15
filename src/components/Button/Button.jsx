import { aboutData } from "../../data/about";
import { FaWhatsapp } from "react-icons/fa";
export default function Button({ text = "Contato" }) {
  return (
    <a
      href={aboutData.whatsappLink}
      target="_blank"
      className="border px-12 py-2 rounded flex gap-2 items-center"
    >
      {text}
      <FaWhatsapp />
    </a>
  );
}
