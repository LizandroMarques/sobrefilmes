import { genresService } from "../services/genresService";

export async function updateGenres() {
  try {
    const objGenres = await genresService();

    const localGenres = localStorage.getItem("genres");
    const strGenres = JSON.stringify(objGenres.genres);

    if (!localGenres || localGenres !== strGenres) {
      //se não existir no localStore ou se o localStore está diferente do q na api, vai atualizar
      localStorage.setItem("genres", strGenres);
    }
  } catch (error) {
    console.error("Erro ao atualizar gêneros:", error);
  }
}
