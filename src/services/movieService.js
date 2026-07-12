import api from "../api/axios";

export const getMovies = async () => {

const response = await api.get("/movie/top_rated");
return response.data.results;
};
export const getMovieDetails = async (id) => {
const response2 = await api.get(`/movie/${id}`);

  return response2.data;
}
export const getgenres = async () => {
  const response3 = await api.get("/genre/movie/list");
  return response3.data.genres;
}
export const searchMovies = async (query) => {
  const response = await api.get("/search/movie", {
    params: {
      query: query,
    },
  });

  return response.data.results;
};