import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: 'd03c893f0ef0ef1618c3413e2cb11b8a',
  language: 'uk-UK',
};

export const fetchTrending = async () => {
  const response = await axios.get('/trending/all/day');
  return response.data.results;
};

export const fetchMovies = async userRequest => {
  const response = await axios.get('/search/movie', {
    params: {
      query: userRequest,
    },
  });
  return response.data.results;
};

export const fetchDetails = async id => {
  const response = await axios.get(`/movie/${id}`);
  return response.data;
};

export const fetchActors = async id => {
  const response = await axios.get(`/movie/${id}/credits`);
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: {
      page: 1,
    },
  });
  return response.data.results;
};
