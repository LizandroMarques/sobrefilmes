import { useEffect, useState } from "react";
import { handleAddFavoritos } from "../../utils/favoritos";
function Poster({ poster, filme }) {
  const [adicionado, setAdicionado] = useState(false);

  //animação do botão
  function handleClick() {
    handleAddFavoritos(filme);
    setAdicionado(true);

    setTimeout(() => setAdicionado(false), 1000);
  }

  return (
    <div className="flex flex-col w-full sm:w-1/2 md:w-1/3  bg-white/30 rounded-2xl overflow-hidden opacity-80">
      <div className="relative flex flex-1 justify-center bg-white/20 overflow-hidden w-full">
        <img src={poster} alt="Poster" className="object-cover" />
      </div>
      <button
        onClick={handleClick}
        className="absolute flex flex-row h-16 justify-center items-center px-10 hover:bg-orange-500/30 group bg-orange-300/60 font-semibold  rounded-br-4xl rounded-tl-2xl cursor-pointer"
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
    </div>
  );
}

export default Poster;
