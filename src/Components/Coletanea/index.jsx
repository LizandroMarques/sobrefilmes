import { useState, useEffect } from "react";
import apiColetanea from "../../services/coletaneaService";
import { Link } from "react-router-dom";

function Coletanea({ idColetanea }) {
  const [coletanea, setColetanea] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getColetanea(id) {
      try {
        console.log("URL final:", `${id}`);
        console.log("API key:", process.env.REACT_APP_API_KEY);

        const response = await apiColetanea.get(`${id}`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "pt-BR",
          },
        });

        if (response.data) {
          setColetanea(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.error("Problema na requisição de Coletânea. Erro: ", error);
      }
    }

    if (idColetanea) {
      getColetanea(idColetanea);
    }
  }, [idColetanea]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [idColetanea]);

  if (loading) {
    return (
      <div>
        <h1 className="font-bold">Carregando detalhes ...</h1>
      </div>
    );
  }

  return (
    <section>
      <div>
        {coletanea?.parts?.map((part) => {
          return (
            <div key={part.id} className="flex flex-col overflow-hidden p-2">
              <Link
                to={`/filme/${part.id}`}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <div className="w-full h-10 relative">
                  <img
                    className="absolute inset-0 w-full h-full object-cover object-center rounded-xl opacity-20 hover:opacity-70 z-10"
                    src={process.env.REACT_APP_API_IMAGES + part.poster_path}
                    alt="poster"
                  />
                  <span className="relative flex justify-center items-center p-2 font-semibold text-center hover:bg-amber-500/25 text-black z-20 rounded-2xl duration-200 ">
                    {part.title}
                  </span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
export default Coletanea;
