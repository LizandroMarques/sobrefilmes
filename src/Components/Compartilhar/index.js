import { toats } from "react-toastify";
import { Link } from "react-router-dom";

export function Compartilhar({ filme, compartilhado }) {
  const filmeAtual = { id: filme.id, title: filme.title };

  const urlFilme = process.env.REACT_APP_API_LINKFILME + filmeAtual.id;

  const texto = `Gostei do filme, dá uma olhada:\n
  Nome: ${filmeAtual.title}\n${urlFilme}`;
  const linkCompleto = `https://wa.me/?text=${encodeURIComponent(texto)}`;

  return (
    <Link to={linkCompleto}>
      <i
        className={`fa fa-share text-amber-900/80 group-hover:text-white transition-all duration-500 ${
          compartilhado
            ? "text-white scale-125 animate-ping"
            : "text-amber-900/80 group-hover:text-white scale-100"
        }`}
        style={{ fontSize: "2rem" }}
      ></i>
    </Link>
  );
}
