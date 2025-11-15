import { getGenreName } from "../../utils/getGenreName";
import { getYear } from "../../utils/getYear";
import { Link } from "react-router-dom";

export function ListaFilmes({ filmes, generos }) {
  function validaGenreName(id) {
    const g = getGenreName(generos, id);
    return g;
  }

  return (
    <div className="w-full overflow-x-hidden my-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full px-4 max-w-[1280px] mx-auto">
        {filmes.map((filme) => (
          <Link to={`/filme/${filme.id}`}>
            <article
              key={filme.id}
              className="relative rounded-2xl shadow-lg overflow-hidden bg-black"
            >
              <div className="w-full aspect-[2/3] relative">
                <img
                  src={`https://image.tmdb.org/t/p/original${filme.poster_path}`}
                  alt={filme.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col justify-between bg-yellow-700/20 hover:bg-amber-800/45">
                  {/* título */}
                  <strong
                    className="w-full h-14 flex items-center justify-center px-4 font-extrabold text-center 
                text-[clamp(16px,2vw,22px)] 
                sm:text-[clamp(14px,1.8vw,20px)] 
                md:text-[clamp(14px,1.6vw,18px)] 
                truncate bg-white/60 rounded-t-2xl z-10"
                  >
                    <span className="block overflow-hidden whitespace-nowrap truncate w-full">
                      {filme.title}
                    </span>
                  </strong>

                  {/* rodapé */}
                  <strong className="relative w-full h-20 p-2 text-center bg-white/60 rounded-b-2xl z-10">
                    <p
                      className="text-black bg-orange-950/30 w-full rounded-2xl 
                  text-[clamp(13px,2vw,16px)] 
                  sm:text-[clamp(11px,1.6vw,14px)] 
                  truncate"
                    >
                      {filme.genre_ids
                        .map((id) => validaGenreName(id))
                        .join(" | ")}
                    </p>

                    <p
                      className={`mt-1 
                    text-[clamp(18px,3vw,26px)] 
                    sm:text-[clamp(16px,2.2vw,22px)] 
                    ${
                      filme.vote_average <= 5.5
                        ? "text-red-700"
                        : "text-green-700"
                    }`}
                    >
                      IMDB: {filme.vote_average.toFixed(1)}
                    </p>

                    <p
                      className="absolute bottom-1 right-2 
                  text-yellow-700 
                  text-[clamp(14px,2vw,20px)] 
                  sm:text-[clamp(12px,1.5vw,16px)]"
                    >
                      {getYear(filme.release_date)}
                    </p>
                  </strong>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
