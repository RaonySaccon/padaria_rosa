// dependencies
import Aos from "aos";
import NoVisible from "./dev/noVisible/noVisible";
import "aos/dist/aos.css";

// sections
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Offers from "./sections/Offers/Offers";
import Differentials from "./sections/Differentials/Differentials";
import Depoiments from "./sections/Depoiments/Depoiments";
import Contact from "./sections/Contact/Contact";
import Cta from "./sections/CTA/Cta";

// components
import Header from "./layout/Header/Header";

export default function App() {
  Aos.init({ duration: 1000, once: true });
  return (
    <main>
      <Header />
      <Hero />

      {/* Seções em que ainda não foi iniciado o desenvolvimento */}
      <NoVisible>
        <About />
        <Offers />
        <Differentials />
        <Depoiments />
        <Contact />
        <Cta />
      </NoVisible>
    </main>
  );
}
