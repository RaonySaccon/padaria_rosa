import "./Hero.css";
import Button from "../../components/Button/Button";

export default function Hero() {
  const imgs = ["/imgs/hero/1.png", "/imgs/hero/2.png"];
  return (
    <div
      id="home"
      className="hero min-h-screen py-20 pt-40 xl:pt-0 flex flex-col xl:flex-row gap-10 items-center justify-center px-6 bg-pink-200 xl:justify-around"
    >
      <div className="text-center flex flex-col gap-4 max-w-120 xl:text-left md:gap-6 xl:gap-8">
        <h1 className="font-bold text-3xl leading-7 md:text-4xl md:leading-8">
          <span className="text-pink-500">Padaria Rosa</span> - momentos
          deliciosos todos os dias
        </h1>
        <p className="opacity-80 md:text-lg">
          Pães fresquinhos, doces caseiros, bolos irresistíveis e aquele café
          que aquece o coração. Aqui, cada produto é feito com carinho e
          tradição.
        </p>
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center justify-center xl:justify-start">
          <Button text="Fazer pedido" />
          <button className="border-pink-500 border px-12 py-1.5 rounded text-pink-500 w-fit">
            Ver mais
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 justify-center">
        {imgs.map((path) => (
          <img
            src={`${path}`}
            alt="Imagem de produto da padaria"
            className="w-60 md:w-70"
          />
        ))}
      </div>
    </div>
  );
}


