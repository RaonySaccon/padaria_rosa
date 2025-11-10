import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ZapButton from "../../components/ZapButton/ZapButton";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <main>
      {/* fixed components */}
      <Header />
      <ZapButton />

      {/* conteúdo das rotas */}
      <Outlet />

      {/* footer global */}
      <Footer />
    </main>
  );
}
