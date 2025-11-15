import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Bottom from "./Components/Bottom";
import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from "./pages/Favoritos";
import Erro from "./pages/Erro";
import Lancamentos from "./pages/Lancamentos";
import MelhoresAvaliados from "./pages/MelhoresAvaliados";
import Populares from "./pages/Populares";
import Procura from "./pages/Procura";
import Sobre from "./pages/Sobre";

function RoutesApp() {
  return (
    <BrowserRouter>
      {/* Font Awesome v4 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      {/* Font Awesome v7 */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.2.0/css/all.min.css"
      />
      <div className="flex flex-col min-h-screen z-10">
        <Header />
        <main className="flex-1 flex flex-col overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/filme/:id" element={<Filme />} />
            <Route path="/lancamentos" element={<Lancamentos />} />
            <Route path="/melhoresavaliados" element={<MelhoresAvaliados />} />
            <Route path="/populares" element={<Populares />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/procura" element={<Procura />} />
            <Route path="/sobre" element={<Sobre />} />

            <Route path="*" element={<Erro />} />
          </Routes>
        </main>
        <Bottom />
      </div>
    </BrowserRouter>
  );
}
export default RoutesApp;
