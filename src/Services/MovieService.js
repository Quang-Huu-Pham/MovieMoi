import axios from './customize-axios';

const CategoryService = () => {
    return axios.get('/genre/movie/list?api_key=0edf7c2e352307b3adc4dd446193177f&language=en-US')
}

const ListMovieService = () => {
    return axios.get('/movie/now_playing?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
}

const TopMoviesService = () => {
    return axios.get('/movie/top_rated?api_key=e9e9d8da18ae29fc430845952232787c&language=en-US&page=1')
}

export { CategoryService, ListMovieService, TopMoviesService };