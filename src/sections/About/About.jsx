import "./About.css";
import Button from "../../components/Button/Button";

// icons
import { GiBreadSlice, GiChefToque } from "react-icons/gi";
import { GrContact } from "react-icons/gr";

export default function About() {
  const items = [
    {
      icon: <GiBreadSlice />,
      title: "Produtos frescos",
      description: "Nada de pão velho ou bolos ressecados.",
    },
    {
      icon: <GiChefToque />,
      title: "Atendimento acolhedor",
      description: "Aqui você é mais que cliente, é parte da família Rosa.",
    },
    {
      icon: <GrContact />,
      title: "Contato fácil",
      description:
        "WhatsApp, telefone ou Instagram – estamos sempre disponíveis.",
    },
  ];

  return (
    <section
      id="sobre"
      className="about min-h-screen py-20 flex items-center justify-center px-8 text-center bg-amber-50"
    >
      <div
        className="bg-white max-w-220 md:p-16 p-6 py-20 border border-gray-600 relative"
        data-aos="zoom-in"
      >
        {/* HEADER */}
        <header
          className="flex flex-col md:flex-row gap-10 max-w-100 md:max-w-220 px-6 md:px-0"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2 className="flex-1 text-2xl leading-6 md:text-3xl md:leading-8 md:text-left text-stone-900">
            Nós somos a melhor padaria da região.
          </h2>
          <p className="flex-1 text-lg leading-5 opacity-80 md:text-right text-stone-700">
            Nosso compromisso é simples: entregar produtos que tragam alegria ao
            seu dia.
          </p>
        </header>

        {/* ICONS */}
        <div
          className="flex flex-col items-center md:flex-row justify-between gap-8 mt-20"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="max-w-60 flex-1 text-center flex flex-col gap-3 items-center"
              data-aos="fade-up"
              data-aos-delay={500 + index * 150}
            >
              <span className="text-5xl text-pink-500">{item.icon}</span>
              <h3 className="text-xl font-bold text-pink-500">{item.title}</h3>
              <p className="leading-5 opacity-80">{item.description}</p>
            </div>
          ))}
        </div>

        {/* BOTÃO */}
        <div
          className="absolute -bottom-5 flex w-full justify-center left-0"
          data-aos="zoom-in-up"
          data-aos-delay="700"
        >
          <Button className="relative" text="Saiba mais" />
        </div>
      </div>
    </section>
  );
}
