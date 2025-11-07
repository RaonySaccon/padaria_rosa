import Button from "../../components/Button/Button";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const contacts = [
    {
      icon: <FaLocationDot className="text-pink-500 text-xl" />,
      text: "Avenida Interpraias Norte, 7791 – Rondinha Velha, Arroio do Sal",
    },
    {
      icon: <FaPhoneAlt className="text-pink-500 text-xl" />,
      text: "+55 (51) 99914-5979",
    },
    {
      icon: <FaEnvelope className="text-pink-500 text-xl" />,
      text: "padariarosa.adm@gmail.com",
    },
    {
      icon: <FaInstagram className="text-pink-500 text-xl" />,
      text: "@padaria_rosa",
    },
  ];

  return (
    <section
      id="contato"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-pink-200 py-20 px-8 gap-10"
    >
      {/* MAPA */}
      <div
        className="w-full lg:w-5/12"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <iframe
          title="Mapa Padaria Rosa"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3472.8864495700223!2d-49.8437109!3d-29.4905105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952265c27c7bf1e1%3A0x3ea145b5ccb0c0b4!2sPadaria%20Rosa!5e0!3m2!1spt-BR!2sbr!4v1762544570251!5m2!1spt-BR!2sbr"
          allowFullScreen=""
          loading="lazy"
          className="rounded-xl w-full h-[400px] lg:h-[450px] shadow-md"
        ></iframe>
      </div>

      {/* INFO */}
      <div
        className="w-full lg:w-5/12 flex flex-col items-center lg:items-start text-center lg:text-left"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <h2 className="text-3xl font-bold text-stone-900 mb-8">
          Como nos encontrar?
        </h2>

        <ul className="flex flex-col gap-8 text-stone-900 text-left">
          {contacts.map((contact, index) => (
            <li
              key={index}
              className="flex items-center gap-3"
              data-aos="fade-up"
              data-aos-delay={index * 150 + 300}
            >
              <span className="w-5">{contact.icon}</span>
              <p>{contact.text}</p>
            </li>
          ))}
        </ul>
        <div data-aos="fade-up" data-aos-delay="800">
          <Button className="mt-8" />
        </div>
      </div>
    </section>
  );
}
