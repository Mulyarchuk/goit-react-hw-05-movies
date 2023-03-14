import axios from "axios";

const API_KEY =`415d7db702870471bef7c92959f9f781`;
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

export const getTrending = async ()=>{
    const response = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
    return response.data.results;
};

export const getSearchMovies = async query => {
    const response = await axios.get(`search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`);
    return response.data.results;
};

export const getMovieDatail = async movieId =>{
    const response = await axios.get(`movie/${movieId}?api_key=${API_KEY}&language=en-US`);
    return response.data;
};

export const getMovieCredits = async movieId =>{
    const response = await axios.get(`movie/${movieId}/credits?api_key=<${API_KEY}&language=en-US`);
    return response.data.cast;
}

export const getMovieReviews = async movieId =>{
    const response = await axios.get(`movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`);
    return response.data.results;
};

