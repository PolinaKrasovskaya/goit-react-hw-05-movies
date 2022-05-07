import axios from 'axios';

const api_key = 'cd0301e8d36e75459e8f6b3abbc4f987';
const URL = 'https://api.themoviedb.org/3';

const api = axios.create({ baseURL: URL, params: { api_key } });

export async function getTrendingMovies() {
  const response = await api.get('/trending/movie/day');
  return response.data.results;
}

export const getMovie = async id => {
  const response = await api.get(`/movie/${id}`);
  return response.data;
};

export const getSearchMovie = async query => {
  const response = await api.get(`search/movie?query=${query}`);
  return response.data.results
};

export const getCast = async id => {
  const response = await api.get(`movie/${id}/credits`);
  return response.data.cast;
};

export const getReviews = async id => {
  const response = await api.get(`movie/${id}/reviews`);
  return response.data.results;
};