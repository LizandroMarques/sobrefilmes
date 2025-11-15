export function getGenreName(generos, idGenre) {
  let g = generos.find((g) => g.id === idGenre);
  return g ? g.name : "";
}
