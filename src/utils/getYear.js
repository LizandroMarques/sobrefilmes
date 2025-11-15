export function getYear(dt) {
  let ano = "";
  if (dt) {
    ano = new Date(dt).getFullYear();
  } else {
    ano = "";
  }
  return ano;
}
