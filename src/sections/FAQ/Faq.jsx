import "./Faq.css";
import { AnimatePresence, motion } from "motion/react";
import { faqData } from "./faqList.jsx";
import { useState } from "react";
import Button from "../../components/Button/Button.jsx";

export default function Faq({
  title = "Perguntas Frequentes",
  data = faqData,
}) {
  return (
    <section
      id="faq"
      className="faq min-h-screen flex flex-col items-center justify-center py-20 px-6"
    >
      <h2 className="text-2xl font-semibold mb-10 text-center">{title}</h2>

      <div className="max-w-4xl w-full flex flex-col gap-4 mb-8">
        {data.map((item, index) => (
          <FaqItem key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
      <Button />
    </section>
  );
}

/* ----------------------- Subcomponente ----------------------- */
function FaqItem({ question = "Pergunta padrão", answer = "Resposta padrão" }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="faq-item border rounded-lg p-4 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-base">{question}</h3>
        <span className="ml-4">{open ? "-" : "+"}</span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="text-sm text-gray-600 leading-5 overflow-hidden"
          >
            <p className="pt-3">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
