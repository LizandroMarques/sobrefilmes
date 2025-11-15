import Main from "../../Components/Main";
import { useState, useEffect } from "react";
import { updateGenres } from "../../utils/updateGenres";
import { ListaFilmes } from "../../Components/ListaFilmes";
import { getFilmesEmExibicao } from "../../services/filmesService";
import Paginacao from "../../Components/Paginacao";

function Home() {
  const [filmes, setFilmes] = useState([]);
  const [generos, setGeneros] = useState([]);
  const [paginaAtual, setPaginaAtual] = useState(1);
  const [totalDePaginas, setTotalDePaginas] = useState(0);

  //responsável em levar para o top qdo clicar na paginação
  useEffect(() => {
    //sempre que mudar de página, rola para o topo
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [paginaAtual]);

  //carrega filmes Em exibição
  useEffect(() => {
    async function loadFilmes() {
      try {
        const data = await getFilmesEmExibicao(paginaAtual);
        setFilmes(data.results);
        setTotalDePaginas(data.total_pages);
      } catch (error) {
        console.warn("Problemas ao carregar filmes. Erro:" + error);
      }
    }

    loadFilmes();
  }, [paginaAtual]);

  //valida a lista genres do localStorage, caso precise atualiza com gêneros da api
  useEffect(() => {
    async function loadGenres() {
      try {
        await updateGenres();
        const storageGenres = JSON.parse(
          localStorage.getItem("genres") || "[]"
        );
        setGeneros(storageGenres);
      } catch (error) {
        console.warn(
          "Problemas ao carregar os gêneros do localStorage. Erro" + error
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
export default Home;
