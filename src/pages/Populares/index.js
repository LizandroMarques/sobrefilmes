import { useEffect, useState } from "react";
import { getFilmesPopular } from "../../services/filmesService";
import { updateGenres } from "../../utils/updateGenres";
import { ListaFilmes } from "../../Components/ListaFilmes";
import Paginacao from "../../Components/Paginacao";
import Main from "../../Components/Main";

function Populares() {
  const [filmes, setFilmes] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalDePaginas, setTotalDePaginas] = useState(0);

  useEffect(() => {
    window.scrollTo(
      {
        top: 0,
        behavior: "smooth",
      }[paginaAtual]
    );
  });

  useEffect(() => {
    async function loadFilmes() {
      try {
        const data = await getFilmesPopular(paginaAtual);
        setFilmes(data.results);
        setTotalDePaginas(data.total_pages);
      } catch (error) {
        console.error("Problemas ao carregar filmes. Error:", error);
      }
    }
    loadFilmes();
  }, [paginaAtual]);

  useEffect(() => {
    async function loadGenres() {
      try {
        await updateGenres();
        const storageGenres = JSON.parse(localStorage.getItem("genres") || []);
        setGeneros(storageGenres);
      } catch (error) {
        console.warn(
          "Problemas ao carregar gêneros do localStroage. Erro " + error
        );
      }
    }
    loadGenres();
  }, []);

  return (
    <Main>
      <ListaFilmes filmes={filmes} generos={generos} />
      <Paginacao
        paginaAtual={paginaAtual}
        totalDePaginas={totalDePaginas}
        mudarPagina={setPaginaAtual}
      />
    </Main>
  );
}

export default Populares;
