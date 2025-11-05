import "./Offers.css";
import { offers } from "./OffersList";
import Button from "../../components/Button/Button";

export default function Offers() {
  return (
    <section
      id="produtos"
      className="bg-amber-50 offers min-h-screen flex items-center justify-center py-20"
    >
      <div>
        <ul>
          {offers.map((item) => (
            <li>{item.title}</li>
          ))}
        </ul>
      </div>
      <Button />
    </section>
  );
}
