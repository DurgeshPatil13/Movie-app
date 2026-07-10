import api from "../api/axios";

export const getMovies = async () => {

const response = await api.get("/movie/popular");
return response.data.results;
};
export const getMovieDetails = async (id) => {
const response2 = await api.get(`/movie/${id}`);

  return response2.data;
}