import { useEffect, useState } from "react";
import { BotaoVoltar } from "../BotaoVoltar";
import { getKeyTrailer } from "../../services/trailerService";
import Coletanea from "../Coletanea";
import Poster from "../Poster";

export function Detalhes({ filme }) {
  const [fundo, setFundo] = useState();
  const [poster, setPoster] = useState();
  const [urlTrailer, setUrlTrailer] = useState();

  useEffect(() => {
    if (filme?.backdrop_path)
      setFundo(process.env.REACT_APP_API_IMAGES + filme.backdrop_path);
  }, [filme?.backdrop_path]);

  useEffect(() => {
    if (filme?.poster_path) {
      setPoster(process.env.REACT_APP_API_IMAGES + filme.poster_path);
    }
  }, [filme?.poster_path]);

  useEffect(() => {
    if (!filme?.id) return;

    const getTrailer = async () => {
      try {
        const keyTrailer = await getKeyTrailer(filme.id);
        const urlCompleta = process.env.REACT_APP_API_TRAILER + keyTrailer;
        setUrlTrailer(urlCompleta);
      } catch (error) {
        console.error("Erro ao buscar o trailer: ", error);
      }
    };
    getTrailer();
  }, [filme?.id]);

  return (
    <>
      <section className="relative w-full min-h-[calc(100vh-80px)] bg-white/75 overflow-hidden z-10">
        {/* Fundo */}
        <img
          src={fundo}
          className="fixed top-0 left-0 w-full h-full object-cover opacity-40 z-10"
          alt="Background"
        />

        <div className="relative flex items-center justify-center min-h-[calc(100vh-80px)] py-6">
          <div className="h-auto max-w-7xl w-full mx-auto flex flex-col md:flex-row items-stretch justify-between bg-white/10 z-20 p-4 rounded-2xl shadow-lg gap-4">
            <div
              className={
                filme.belongs_to_collection?.id
                  ? "flex flex-col md:flex-row w-full md:w-2/3 items-stretch text-center md:text-left gap-4"
                  : "flex flex-col md:flex-row w-full items-stretch text-center md:text-left gap-4"
              }
            >
              {/* Poster */}
              <Poster poster={poster} filme={filme} />

              {/* Informações */}
              <div className="w-full sm:w-1/2 md:w-2/3 bg-white/30 p-3 rounded-2xl flex flex-col gap-2">
                <p className="font-bold text-2xl">Título: {filme.title}</p>
                <p>
                  Gênero:
                  <strong className="ml-2">
                    {filme.genres?.map((g) => g.name).join(" | ")}
                  </strong>
                </p>
                <p>
                  Título original:
                  <strong className="ml-2">{filme.original_title}</strong>
                </p>
                <p>
                  Tempo (min):
                  <strong className="ml-2">
                    {filme.runtime ? filme.runtime : " - "}
                  </strong>
                </p>
                <p>
                  Orçamento:
                  <strong className="ml-2">
                    {filme.budget !== 0 ? "U$ " + filme.budget : " - "}
                  </strong>
                </p>
                <p
                  className={
                    filme.vote_average <= 5.5
                      ? "text-red-700"
                      : "text-green-700"
                  }
                >
                  IMDB:
                  <strong className="ml-2">
                    {filme.vote_average !== 0.0
                      ? filme.vote_average?.toFixed(1)
                      : " - "}
                  </strong>
                </p>
                <p>
                  Votantes:
                  <strong className="ml-2">
                    {filme.vote_count !== 0
                      ? filme.vote_count + " pessoas"
                      : " - "}
                  </strong>
                </p>
                <p>
                  HomePage:
                  <strong className="ml-2">
                    {filme?.homepage !== "" ? (
                      <a
                        href={filme?.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="text-blue-700 hover:text-blue-900 ml-2"
                      >
                        <i className="fa fa-globe"></i>
                      </a>
                    ) : (
                      " - "
                    )}
                  </strong>
                </p>
                <p>
                  Trailer:
                  <strong className="ml-2">
                    {urlTrailer !== undefined ? (
                      <a
                        href={urlTrailer}
                        target="_blank"
                        rel="noreferrer"
                        className="text-red-700 hover:text-red-900 ml-2"
                      >
                        <i className="fa fa-film"></i>
                      </a>
                    ) : (
                      " - "
                    )}
                  </strong>
                </p>

                {/* Sinopse */}
                <p
                  className={
                    filme.overview !== ""
                      ? "first-letter:font-bold first-letter:text-2xl mt-3 leading-relaxed text-justify"
                      : "text-red-700 mt-3 leading-relaxed text-justify"
                  }
                >
                  {filme.overview !== "" ? (
                    <strong>{filme.overview}</strong>
                  ) : (
                    <strong> Sem sinopse em português.</strong>
                  )}
                </p>
              </div>
            </div>

            {/* Coletânea */}
            <div
              className={`${
                !filme.belongs_to_collection?.id ? "hidden" : ""
              } w-full md:w-1/3 bg-white/30 p-4 rounded-2xl`}
            >
              <Coletanea idColetanea={filme.belongs_to_collection?.id} />
            </div>
          </div>
        </div>
      </section>
      <div className="relative z-9999">
        <div className="h-14 w-full font-bold text-3xl flex justify-center items-center rounded-t-lg">
          <BotaoVoltar>VOLTAR</BotaoVoltar>
        </div>
      </div>
    </>
  );
}
