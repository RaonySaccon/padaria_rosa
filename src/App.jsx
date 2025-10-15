// dependencies
import Aos from "aos";
import "aos/dist/aos.css";
import NoVisible from "./dev/noVisible/noVisible";

// sections
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Offers from "./sections/Offers/Offers";
import Differentials from "./sections/Differentials/Differentials";
import Depoiments from "./sections/Depoiments/Depoiments";
import Contact from "./sections/Contact/Contact";
import Cta from "./sections/CTA/Cta";
import Faq from "./sections/FAQ/Faq";

// components
import Header from "./layout/Header/Header";
import Footer from "./layout/Footer/Footer";
import ZapButton from "./components/ZapButton/ZapButton";

export default function App() {
  Aos.init({ duration: 1000, once: true });
  return (
    <main>
      {/* fixeds */}
      <Header />
      <ZapButton />

      {/* sections */}
      <Depoiments />
      <Faq />
      <Footer />

      {/* Seções em que ainda não foi iniciado o desenvolvimento */}
      <NoVisible>
        <Hero />
        <About />
        <Offers />
        <Differentials />
        <Contact />
        <Cta />
      </NoVisible>
    </main>
  );
}
// order: hero, about, offers, differentials, depoiments, contact, cta
