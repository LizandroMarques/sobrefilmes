import { useEffect, useState } from "react";
import { handleAddFavoritos } from "../../utils/favoritos";
import { Compartilhar } from "../Compartilhar";

function Poster({ poster, filme }) {
  const [adicionado, setAdicionado] = useState(false);
  const [compartilhado, setCompartilhado] = useState(false);

  //animação do botão
  function handleClickFavoritos() {
    handleAddFavoritos(filme);
    setAdicionado(true);

    setTimeout(() => setAdicionado(false), 1000);
  }

  //animação do botão
  function handleClickCompartilhar() {
    setCompartilhado(true);

    setTimeout(() => setCompartilhado(false), 1000);
  }

  return (
    <div className="relative flex flex-col w-full sm:w-1/2 md:w-1/3  bg-white/30 rounded-2xl overflow-hidden opacity-80">
      <div className="relative flex flex-1 justify-center bg-white/20 overflow-hidden w-full">
        <img src={poster} alt="Poster" className="object-cover" />
      </div>
      <button
        onClick={handleClickFavoritos}
        className="absolute flex flex-row h-16 justify-center items-center px-10 hover:bg-orange-500/30 group bg-orange-300/60 font-semibold cursor-pointer rounded-br-3xl rounded-tl-2xl "
      >
        <i
          className={`fa fa-heart text-amber-900/80 group-hover:text-white transition-all duration-500 ${
            adicionado
              ? "text-white scale-125 animate-ping"
              : "text-amber-900/80 group-hover:text-white scale-100"
          }`}
          style={{ fontSize: "2rem" }}
        ></i>
      </button>
      <button
        onClick={handleClickCompartilhar}
        className="absolute flex flex-row right-0 bottom-0 h-16 justify-center items-center px-10 hover:bg-orange-500/30 group bg-orange-300/60 font-semibold cursor-pointer rounded-br-2xl rounded-tl-2xl "
      >
        <Compartilhar filme={filme} compartilhado={compartilhado} />
      </button>
    </div>
  );
}

export default Poster;
