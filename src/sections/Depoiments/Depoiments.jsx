import "./Depoiments.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Button from "../../components/Button/Button";
import { depoiments } from "./DepoimentsList";
import { useRef } from "react";

export default function Depoiments() {
  const timer = useRef();

  const [sliderRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    breakpoints: {
      "(min-width: 768px)": {
        slides: { perView: 2, spacing: 25 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
    created(slider) {
      function autoplay() {
        clearInterval(timer.current);
        timer.current = setInterval(() => {
          slider.next();
        }, 3000);
      }

      autoplay();

      slider.container.addEventListener("mouseenter", () =>
        clearInterval(timer.current)
      );
      slider.container.addEventListener("mouseleave", autoplay);
    },
    destroyed() {
      clearInterval(timer.current);
    },
  });

  return (
    <section
      id="depoimentos"
      className="depoiments min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-amber-50"
    >
      <div className="flex flex-col mb-10 text-center" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-4">Depoimentos</h2>
        <p className="opacity-80 leading-5">
          Veja o que nossos clientes estão falando de nós!
        </p>
      </div>

      <div
        ref={sliderRef}
        className="keen-slider max-w-6xl w-full mb-10"
        data-aos="zoom-in"
      >
        {depoiments.map((item, i) => (
          <div
            key={i}
            className="keen-slider__slide flex flex-col items-center justify-center rounded p-6 text-center bg-pink-400 text-white shadow-lg"
          >
            <p className="mb-4 italic text-lg">“{item.depoiment}”</p>
            <p className="font-semibold text-xl">{item.author}</p>
            <p className="text-sm">{item.region}</p>
          </div>
        ))}
      </div>

      <div data-aos="fade-up" data-aos-delay="200">
        <Button />
      </div>
    </section>
  );
}
