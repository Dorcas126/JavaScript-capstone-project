import { getMovieApi } from "./apis"
import displayMovies from "./displayMovieCards"
// List item on page

export const refresh = async ()=>{
const movies = await getMovieApi()
displayMovies(movies)
}