import api from "./api";

export async function getKeyTrailer(id) {
  const response = await api.get(`movie/${id}/videos`, {
    params: {
      api_key: process.env.REACT_APP_API_KEY,
      language: "pt-BR",
    },
  });
  return response.data.results[0].key;
}
