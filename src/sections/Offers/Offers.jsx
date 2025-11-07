import "./Offers.css";
import { offers } from "./OffersList";
import Button from "../../components/Button/Button";
import { BiMenu } from "react-icons/bi";

export default function Offers() {
  function ButtonSeeAll({ mobile }) {
    return (
      <button
        className={`${
          mobile ? "flex lg:hidden mx-auto" : "hidden lg:flex"
        } px-6 py-1 text-pink-500 border-b-2 border-pink-500 items-center gap-2 w-fit`}
        data-aos="fade-up"
        data-aos-delay={mobile ? "700" : "300"}
      >
        Cardápio <BiMenu />
      </button>
    );
  }

  return (
    <section
      id="delicias"
      className="bg-amber-50 offers min-h-screen flex flex-col gap-8 items-center justify-center py-20 px-8 leading-7"
    >
      <div className="w-fit mx-auto" data-aos="zoom-in" data-aos-delay="100">
        <header
          className="flex justify-center lg:justify-between items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <h2
            className="text-center lg:text-left text-3xl font-bold flex gap-1 items-center flex-col lg:flex-row mb-10"
            data-aos="fade-right"
            data-aos-delay="250"
          >
            Confira nossos destaques
            <img
              src="/imgs/icons/growing_heart.png"
              alt="Coração crescendo emoji"
              className="w-10 ml-2"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
            <p className="hidden lg:block">:</p>
          </h2>
          <ButtonSeeAll />
        </header>

        <ul
          className="
           grid gap-8 
           justify-items-center
           grid-cols-1
           sm:grid-cols-2
           lg:grid-cols-4
          "
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {offers.map((item, i) => (
            <li
              key={item.title}
              className="sm:max-w-55 flex flex-col gap-2"
              data-aos="zoom-in-up"
              data-aos-delay={400 + i * 150}
            >
              <img
                src="https://placehold.co/300x400"
                alt={`Imagem ilustrativa de: ${item.title}`}
                className="rounded-xl"
              />
              <h3 className="font-bold text-xl mt-4">{item.title}</h3>
              <p className="h-14 leading-5 opacity-80">{item.description}</p>
              <Button leaked className="w-full px-0" text="Eu quero" />
            </li>
          ))}
        </ul>

        <div
          className="flex flex-col items-center lg:hidden mt-14"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <p className="font-bold text-stone-950 text-lg text-center px-4">
            Ou veja todas nossas delícias! &#8595;{" "}
          </p>
          <ButtonSeeAll mobile />
        </div>
      </div>
    </section>
  );
}
