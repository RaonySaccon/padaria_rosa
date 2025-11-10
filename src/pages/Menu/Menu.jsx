import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [searchTerm, setSearchTerm] = useState("");

  const zapNumber = "5551999145979"; // <- coloque o número do WhatsApp aqui

  const menuItems = [
    {
      name: "Pão Francês",
      category: "Padaria",
      desc: "Tradicional e crocante.",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Café Expresso",
      category: "Bebidas",
      desc: "Intenso e aromático.",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Cuca de Banana",
      category: "Doces",
      desc: "Fofinha e doce na medida certa.",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Pão de Queijo",
      category: "Padaria",
      desc: "Macio e irresistível.",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Suco Natural",
      category: "Bebidas",
      desc: "Refrescante e natural.",
      image: "https://placehold.co/400x300",
    },
    {
      name: "Torta de Limão",
      category: "Doces",
      desc: "Cremosa e azedinha na medida.",
      image: "https://placehold.co/400x300",
    },
  ];

  const categories = [
    "Todos",
    ...new Set(menuItems.map((item) => item.category)),
  ];

  // Filtragem combinada: categoria + busca
  const filteredItems = menuItems.filter((item) => {
    const matchesCategory =
      activeCategory === "Todos" || item.category === activeCategory;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Inicializa e reinicia animações
  useEffect(() => {
    Aos.init({ duration: 800, easing: "ease-out-cubic", once: false });
  }, []);

  // Recarrega animação sempre que troca categoria ou busca
  useEffect(() => {
    Aos.refreshHard();
  }, [activeCategory, searchTerm]);

  return (
    <section className="min-h-screen bg-pink-50 py-16 px-6 pt-40">
      <div className="max-w-6xl mx-auto text-center mb-10" data-aos="fade-up">
        <h1 className="text-4xl font-bold text-pink-700 mb-4">Cardápio</h1>
        <p className="text-pink-600">
          Confira as delícias que preparamos para você!
        </p>
      </div>

      {/* Barra de busca */}
      <div
        className="flex justify-center mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <input
          type="text"
          placeholder="Buscar item..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border border-pink-200 rounded focus:outline-none focus:ring-2 focus:ring-pink-400 text-pink-700 placeholder-pink-400"
        />
      </div>

      {/* Categorias */}
      <div
        className="flex justify-center flex-wrap gap-3 mb-12"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded cursor-pointer text-sm font-medium transition-all duration-300 ${
              activeCategory === cat
                ? "bg-pink-600 text-white shadow-md"
                : "bg-white text-pink-700 border border-pink-200 hover:bg-pink-100"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Itens */}
      <div
        className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        data-aos="fade"
      >
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <div
              key={i}
              data-aos="zoom-in"
              data-aos-delay={100 + i * 80}
              className="bg-white rounded-lg hover:shadow-md transition-all overflow-hidden group"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="p-5 text-center">
                <h3 className="text-xl font-semibold text-pink-700">
                  {item.name}
                </h3>
                <p className="text-sm text-pink-500 mb-4">{item.desc}</p>
                <a
                  href={`https://wa.me/${zapNumber}?text=Olá! Quero pedir o item *${item.name}* 🍞`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-pink-600 text-white px-8 py-2 rounded font-medium text-sm hover:bg-pink-700 transition-all duration-300"
                >
                  Pedir no WhatsApp
                </a>
              </div>
            </div>
          ))
        ) : (
          <p
            className="text-center text-pink-500 col-span-full"
            data-aos="fade-up"
          >
            Nenhum item encontrado.
          </p>
        )}
      </div>
    </section>
  );
}
