import api from "../services/api";

export async function genresService() {
  const { data } = await api.get(
    `${process.env.REACT_APP_API_URL}genre/movie/list?`,
    {
      params: {
        api_key: process.env.REACT_APP_API_KEY,
        language: "pt-BR",
        page: 1,
      },
    }
  );
  return data;
}
