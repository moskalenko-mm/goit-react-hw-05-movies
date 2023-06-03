import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

export const fetchTrending = async () => {
  const response = await axios.get('/trending/all/day', {
    params: {
      api_key: 'd03c893f0ef0ef1618c3413e2cb11b8a',
      language: 'uk-UK',
    },
  });
  return response.data.results;
};

export const fetchMovies = async userRequest => {
  const response = await axios.get('/search/movie', {
    params: {
      api_key: 'd03c893f0ef0ef1618c3413e2cb11b8a',
      language: 'uk-UK',
      query: userRequest,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export const fetchDetails = async id => {
  const response = await axios.get(`/movie/${id}`, {
    params: {
      api_key: 'd03c893f0ef0ef1618c3413e2cb11b8a',
      language: 'uk-UK',
    },
  });
  return response.data;
};

export const fetchActors = async id => {
  const response = await axios.get(`/movie/${id}/credits`, {
    params: {
      api_key: 'd03c893f0ef0ef1618c3413e2cb11b8a',
      language: 'uk-UK',
    },
  });
  return response.data.cast;
};

export const fetchReviews = async id => {
  const response = await axios.get(`/movie/${id}/reviews`, {
    params: {
      api_key: 'd03c893f0ef0ef1618c3413e2cb11b8a',
      language: 'uk-UK',
      page: 1,
    },
  });
  return response.data.results;
};
