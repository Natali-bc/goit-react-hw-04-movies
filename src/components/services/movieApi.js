import axios from 'axios';

const baseURL = 'https://api.themoviedb.org/3/';
const keyAPI = '2d536748299a0654176fee96f4763797';

const getPopularFilms = () => {
  return axios
    .get(`${baseURL}trending/movie/week?api_key=${keyAPI}`)
    .then(response => response.data);
};

const getFilmInfo = movieId => {
  return axios
    .get(`${baseURL}movie/${movieId}?api_key=${keyAPI}`)
    .then(response => response.data);
};

const getActorInfo = movieId => {
  return axios
    .get(`${baseURL}movie/${movieId}/credits?api_key=${keyAPI}`)
    .then(response => response.data);
};

const getReviewInfo = movieId => {
  return axios
    .get(`${baseURL}movie/${movieId}/reviews?api_key=${keyAPI}`)
    .then(response => response.data);
};
const getSearchMovies = query => {
  return axios
    .get(`${baseURL}search/movie?query=${query}&api_key=${keyAPI}`)
    .then(response => response.data);
};
export {
  getPopularFilms,
  getFilmInfo,
  getActorInfo,
  getReviewInfo,
  getSearchMovies,
};
