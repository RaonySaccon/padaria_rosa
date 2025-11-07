import "./Cta.css";
import Button from "../../components/Button/Button";

export default function Cta() {
  return (
    <section className="cta min-h-screen flex flex-col items-center justify-center py-20 px-8">
      <h2
        className="text-pink-600 text-3xl md:text-5xl font-bold mb-8 max-w-120 text-center"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Quer experimentar nossos produtos?
      </h2>
      <div data-aos="zoom-in" data-aos-delay="300">
        <Button text="Contate nos!" />
      </div>
    </section>
  );
}
