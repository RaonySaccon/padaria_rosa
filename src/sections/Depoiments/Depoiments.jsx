import "./Depoiments.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useEffect, useRef } from "react";
import Button from "../../components/Button/Button";
import { depoiments } from "./DepoimentsList";

export default function Depoiments() {
  const [sliderRef, instanceRef] = useKeenSlider({
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
  });

  const timer = useRef();
  useEffect(() => {
    timer.current = setInterval(() => {
      instanceRef.current?.next();
    }, 3500);
    return () => clearInterval(timer.current);
  }, [instanceRef]);

  return (
    <section
      id="depoimentos"
      className="depoiments min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <h2 className="text-2xl font-semibold mb-10 text-center">Depoimentos</h2>

      <div ref={sliderRef} className="keen-slider max-w-6xl w-full mb-10">
        {depoiments.map((item, i) => (
          <div
            key={i}
            className="keen-slider__slide flex flex-col items-center justify-center rounded-xl p-6 text-center bg-gray-200"
          >
            <p className="mb-4 italic text-sm">{item.depoiment}”</p>
            <p className="font-semibold">{item.author}</p>
            <p className="text-sm">{item.region}</p>
          </div>
        ))}
      </div>

      <Button />
    </section>
  );
}
