import axios from 'axios';

const API_KEY = 'd181f6aed649ea703d889941a0afb502';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

const getFilmsData = async searchLink => {
  const response = await axios.get(searchLink);
  const data = await response.data;
  return data;
};

export const getTrends = async () => {
  try {
    const link = `trending/movie/day?api_key=${API_KEY}&page=1`;
    return await getFilmsData(link);
  } catch (error) {
    console.log(error.message);
  }
};

export const getSearched = async (searchQuery, page) => {
  try {
    const link = `search/movie?api_key=${API_KEY}&query=${searchQuery}&page=1`;
    return await getFilmsData(link);
  } catch (error) {
    console.log(error.message);
  }
};

export const getDetails = async id => {
  try {
    const link = `/movie/${id}?api_key=${API_KEY}&page=1&language=us-en`;
    return await getFilmsData(link);
  } catch (error) {
    console.log(error.message);
  }
};

export const getReviews = async id => {
  try {
    const link = `/movie/${id}/reviews?api_key=${API_KEY}&page=1&language=en-US`;
    return await getFilmsData(link);
  } catch (error) {
    console.log(error.message);
  }
};

export const getCredits = async id => {
  try {
    const link = `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    return await getFilmsData(link);
  } catch (error) {
    console.log(error.message);
  }
};
