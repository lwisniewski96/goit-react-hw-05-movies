import axios from 'axios';

const KEY = '0bb1185713a009a7b69dfaaac1ff1121';


axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: KEY,
  language: 'en-US', 
};

export const fetchTrends = async () => {
  try {
    const { data } = await axios.get('/trending/movie/day');
    return data;
  } catch (error) {
    console.log('Error', error.message);
    throw error;
  }
};

export const fetchMovie = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`);
    return data;
  } catch (error) {
    console.log('Error', error.message);
    throw error;
  }
};

export const fetchMovies = async query => {
  try {
    const { data } = await axios.get('/search/movie', { params: { query } });
    return data;
  } catch (error) {
    console.log('Error', error.message);
    throw error;
  }
};

export const fetchCast = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`);
    return data;
  } catch (error) {
    console.log('Error', error.message);
    throw error;
  }
};

export const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`);
    return data;
  } catch (error) {
    console.log('Error', error.message);
    throw error;
  }
};
