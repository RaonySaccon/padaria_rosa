import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/globals.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import MainLayout from "./layout/MainLayout/MainLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        {/* Layout global */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/cardapio" element={<Menu />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
