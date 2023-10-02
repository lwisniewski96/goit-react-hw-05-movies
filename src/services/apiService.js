import axios from 'axios';

const KEY = '0bb1185713a009a7b69dfaaac1ff1121';

export const fetchTrends = async () => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie/day';
  const { data } = await axios({
    params: {
      api_key: KEY,
      language: 'en-US',
    },
  });
  return data;
};

export const fetchMovie = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const fetchMovies = async query => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/search/movie';
  const { data } = await axios({
    params: {
      api_key: KEY,
      query,
    },
  });
  return data;
};

export const fetchCast = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/credits`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};

export const fetchReviews = async movieId => {
  axios.defaults.baseURL = 'https://api.themoviedb.org/3/movie';
  const { data } = await axios(`${movieId}/reviews`, {
    params: {
      api_key: KEY,
    },
  });
  return data;
};
