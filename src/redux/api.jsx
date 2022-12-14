import axios from "axios";

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_MOVIE_API}`

export const fetchMovies = async(movieName) =>{
    return axios.get(`${API_ENDPOINT}&s=${movieName}`)
}
