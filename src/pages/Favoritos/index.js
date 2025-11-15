import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("favoritos");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  function excluirFavorito(idFilme) {
    const listaAtualizada = filmes.filter((item) => item.id !== idFilme);
    setFilmes(listaAtualizada);
    localStorage.setItem("favoritos", JSON.stringify(listaAtualizada));
    toast.success("Filme removido com sucesso");
  }

  return (
    <div className="flex flex-col justify-center items-center w-full h-full bg-red-100/55">
      <h1 className="m-5">
        <strong>FAVORITOS</strong>
      </h1>

      {filmes.length === 0 && <span>Lista vazia!</span>}
      <div className="flex m-4 py-10  bg-white/40 rounded-2xl">
        <ul className="w-auto sm:w-lvh">
          {filmes.map((item, index) => {
            return (
              <li key={item.id !== "" ? item.id : ""} className="flex ">
                <div
                  className={`flex w-full p-2 round ${
                    index % 2 === 0
                      ? "bg-white/40 hover:bg-orange-200/20"
                      : "bg-white/60 hover:bg-orange-200/20"
                  }`}
                >
                  <span className="min-w-0 w-full">{item.title}</span>
                  <div className="flex w-60 justify-around items-center">
                    <p className="flex">
                      <Link to={`/filme/${item.id}`}>
                        <i className="fa fa-film"></i>
                      </Link>
                    </p>
                    <button
                      onClick={() => excluirFavorito(item.id)}
                      className="flex cursor-pointer"
                    >
                      <i className="fa fa-delete"></i>Excluir
                    </button>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Favoritos;
