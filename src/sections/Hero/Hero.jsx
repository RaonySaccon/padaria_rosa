import "./Hero.css";
import Button from "../../components/Button/Button";

export default function Hero() {
  const imgs = ["/imgs/hero/1.png", "/imgs/hero/2.png"];

  return (
    <section
      id="home"
      className="hero min-h-screen py-20 pt-40 xl:pt-0 flex flex-col xl:flex-row gap-10 items-center justify-center px-6 bg-pink-200 xl:justify-around overflow-hidden"
    >
      {/* TEXTO */}
      <div
        className="text-center flex flex-col gap-4 max-w-120 xl:text-left md:gap-6 xl:gap-8"
        data-aos="fade-right"
      >
        <h1
          className="font-bold text-3xl leading-7 md:text-4xl md:leading-8"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="text-pink-500">Padaria Rosa</span> - momentos
          deliciosos todos os dias
        </h1>

        <p
          className="opacity-80 md:text-lg"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Pães fresquinhos, doces caseiros, bolos irresistíveis e aquele café
          que aquece o coração. Aqui, cada produto é feito com carinho e
          tradição.
        </p>

        <div
          className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center xl:justify-start"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <Button text="Fazer pedido" />
          <a
            className="border-pink-500 border px-12 py-1.5 rounded text-pink-500 w-fit hover:scale-95 transition hover:underline"
            href="#sobre"
          >
            Ver mais
          </a>
        </div>
      </div>

      {/* IMAGENS */}
      <div
        className="flex flex-wrap gap-4 justify-center"
        data-aos="fade-left"
        data-aos-delay="300"
      >
        {imgs.map((path, i) => (
          <img
            key={i}
            src={path}
            alt="Imagem de produto da padaria"
            className="w-60 md:w-70"
            data-aos="zoom-in-up"
            data-aos-delay={500 + i * 150}
          />
        ))}
      </div>
    </section>
  );
}
