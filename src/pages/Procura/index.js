import { useEffect, useState } from "react";
import { getFilmesConsulta } from "../../services/filmesService";
import { updateGenres } from "../../utils/updateGenres";
import { ListaFilmes } from "../../Components/ListaFilmes";
import Paginacao from "../../Components/Paginacao";
import Main from "../../Components/Main";
import { useSearchParams } from "react-router-dom";

function Procura() {
  const [filmes, setFilmes] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalDePaginas, setTotalDePaginas] = useState(0);
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState("");

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [paginaAtual]);

  useEffect(() => {
    const query = searchParams.get("query");
    setQuery(query);
    setPaginaAtual(1);
  }, [searchParams]);

  useEffect(() => {
    async function loadConsulta() {
      try {
        if (!query) return;

        const data = await getFilmesConsulta(paginaAtual, query);
        setFilmes(data.results);
        setTotalDePaginas(data.total_pages);
      } catch (error) {
        console.error("Problemas ao carregar filmes. Error:", error);
      }
    }
    loadConsulta();
  }, [paginaAtual, query]);

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

export default Procura;
