import { toast } from "react-toastify";

export function handleAddFavoritos(filme) {
  const filmeAtual = { id: filme.id, title: filme.title };

  const listaFavoritos = localStorage.getItem("favoritos");

  let jsonListaFavoritos = JSON.parse(listaFavoritos) || [];

  const hasFilmes = jsonListaFavoritos.some(
    (itemLista) => itemLista.id === filmeAtual.id
  );

  if (hasFilmes) {
    // alert("FILME JÁ INFORMADO NOS FAVORITOS!");
    toast.warn("Esse filme já está na lista!");
    return;
  }

  jsonListaFavoritos.push(filmeAtual);
  localStorage.setItem("favoritos", JSON.stringify(jsonListaFavoritos));
  //   alert("FILME ADICIONADO COM SUCESSO");
  toast.success("Filme salvo com sucesso.");
}
