import { aboutData } from "../../data/about";
import { FaWhatsapp } from "react-icons/fa";
import "./ZapButton.css";

export default function ZapButton() {
  return (
    <a
      href={aboutData.whatsappLink}
      target="_blank"
      className="pulse-anim rounded-full fixed right-5 bottom-5 bg-yellow-400 p-3 text-4xl md:text-5xl lg:text-6xl hover:scale-90 hover:bg-yellow-300 transition-transform z-80"
    >
      <FaWhatsapp />
    </a>
  );
}
