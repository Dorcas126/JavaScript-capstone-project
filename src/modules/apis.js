
import { MOVIE_API_URL } from "./variables"
// get movies and likes

export const getMovieApi = async() =>{
const res  =  await fetch(MOVIE_API_URL)

return res.json()
}