import logo from "../../assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import Sobre from "../../pages/Sobre";

function Header() {
  const [menuAtivo, setMenuAtivo] = useState("emExibicao");
  const [conteudoProcura, setConteudoProcura] = useState("");

  return (
    <header className="flex flex-wrap items-center justify-between bg-orange-950/35 px-6 py-4 z-50">
      <Link to="/sobre">
        <img
          src={logo}
          alt="Sobre Filmes"
          className="hidden md:block md:w-48"
        />
      </Link>

      <div
        id="containerFilmesSeries"
        className="flex flex-col h-35 items-center justify-center text-white gap-4 md:gap-6 flex-1"
      >
        <Link to="/sobre">
          <img
            src={logo}
            alt="Sobre Filmes"
            className="block md:hidden w-32 md:w-48 cursor-pointer"
          />
        </Link>
        <nav className="flex flex-wrap w-full  justify-center gap-1.5 md:gap-0.5 mt-0.5">
          <a
            href="#"
            className={`${
              menuAtivo === "lancamentos"
                ? "bg-white/85"
                : "bg-white/55 hover:bg-white/85"
            }  duration-150 rounded-l-2xl text-black px-0.5 py-1 text-xs md:text-base md:mx-2 md:px-2`}
            onClick={(e) => {
              e.preventDefault();
              setMenuAtivo("lancamentos");
            }}
          >
            <Link to="/lancamentos">Lançamentos</Link>
          </a>
          <a
            href="#"
            className={`
            ${
              menuAtivo === "emExibicao"
                ? "bg-white/85"
                : "bg-white/55 hover:bg-white/85"
            } duration-150 text-black px-0.5 py-1 text-xs md:text-base md:mx-2 md:px-2`}
            onClick={(e) => {
              e.preventDefault();
              setMenuAtivo("emExibicao");
            }}
          >
            <Link to="/">Em Exibição</Link>
          </a>
          <a
            href="#"
            className={`
            ${
              menuAtivo === "melhoresAvaliados"
                ? "bg-white/85"
                : "bg-white/55 hover:bg-white/85"
            } duration-150 text-black px-0.5 py-1 text-xs md:text-base md:mx-2 md:px-2`}
            onClick={(e) => {
              e.preventDefault();
              setMenuAtivo("melhoresAvaliados");
            }}
          >
            <Link to="/melhoresavaliados">Melhores Avaliados</Link>
          </a>
          <a
            href="#"
            className={`
            ${
              menuAtivo === "populares"
                ? "bg-white/85"
                : "bg-white/55 hover:bg-white/85"
            } duration-150 text-black px-0.5 py-1 text-xs md:text-base md:mx-2 md:px-2`}
            onClick={(e) => {
              e.preventDefault();
              setMenuAtivo("populares");
            }}
          >
            <Link to="/populares">Populares</Link>
          </a>

          <a
            href="#"
            className={`
            ${
              menuAtivo === "favoritos"
                ? "bg-white/85"
                : "bg-white/55 hover:bg-white/85"
            } duration-150 rounded-r-2xl text-black px-0.5 py-1 text-xs md:text-base mr-5 md:mx-2 md:px-2`}
            onClick={(e) => {
              e.preventDefault();
              setMenuAtivo("favoritos");
            }}
          >
            <Link to="/favoritos">Favoritos</Link>
          </a>
        </nav>

        <div
          id="baixo"
          className="flex items-center justify-center w-full md:w-2xl gap-0.5"
        >
          <input
            type="text"
            placeholder="Procurar filmes"
            className={`
                ${
                  menuAtivo === "procura"
                    ? "bg-white/85"
                    : "bg-white/55 hover:bg-white/85"
                } flex w-70 bg-white/55 hover:bg-white/85 rounded-l-2xl px-3 py-1 text-black text-xs md:text-base`}
            onChange={(e) => setConteudoProcura(e.target.value)}
            value={conteudoProcura}
          />
          <Link
            to={`/procura?query=${conteudoProcura}`}
            onClick={() => setMenuAtivo("procura")}
            className={`
            ${
              menuAtivo === "procura"
                ? "bg-white/"
                : "bg-white/ hover: bg-white/"
            }
            duration-150 rounded-r-xl text-black px-0.5 py-1 text-xs md:text-base md:mx-2 
            `}
          >
            <p
              className={`fa fa-search
                ${
                  menuAtivo === "procura"
                    ? "bg-white/85"
                    : "bg-white/55 hover:bg-white/85"
                } w-full flex items-center justify-center duration-150 rounded-r-2xl text-black py-1.5 px-4 mx-1 text-xs md:text-base md:mx-2 md:px-2`}
            ></p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
