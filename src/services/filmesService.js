import api from "./api";

export async function getFilmesEmExibicao(page = 1) {
  const response = await api.get("/movie/now_playing", {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      page,
      language: "pt-BR",
    },
  });
  return response.data;
}

export async function getFilmesPopular(page = 1) {
  const response = await api.get("/movie/popular", {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "pt-BR",
      page,
    },
  });
  return response.data;
}

export async function getFilmesMelhoresAvaliados(page = 1) {
  const response = await api.get("/movie/top_rated", {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "pt-BR",
      page,
    },
  });
  return response.data;
}

export async function getFilmesLancamentos(page = 1) {
  const response = await api.get("/movie/upcoming", {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "pt-BR",
      page,
    },
  });
  return response.data;
}

export async function getFilmesConsulta(page = 1, query) {
  const response = await api.get("/search/movie?query=" + query, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "pt-BR",
      page,
    },
  });
  return response.data;
}
