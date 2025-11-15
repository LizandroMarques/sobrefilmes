import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import { Detalhes } from "../../Components/Detalhes";

function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState([]);

  useEffect(() => {
    async function loadFilme() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: process.env.REACT_APP_API_KEY,
            language: "pt-BR",
            page: 1,
          },
        })
        .then((response) => {
          setFilme(response.data);
        })
        .catch(() => {
          console.log("FIlme não encontrado!");
          return;
        });
    }

    loadFilme();
    return () => {};
  }, [filme, id]);

  return (
    <div className="w-full h-full">
      <Detalhes filme={filme} />
    </div>
  );
}

export default Filme;
