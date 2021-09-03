import { API } from './api';
import { getMoviesRoute, getSnacksRoute } from './routes';

export const getMovies = () => {
    return API.get(`${getMoviesRoute}.json`)
}

export const getSingleMovie = id => {
    return API.getMovie(`${getMoviesRoute}/` , `${id}.json`)
}

export const getSnacks = () => {
    return API.get(`${getSnacksRoute}.json`)
}

export const sendBookedSeats = (data , id) => {
    return API.patch(JSON.stringify(data), `movies/` , `${id}`)
}