import { selectElFromDom, selectElsFromDom } from "./DomUtilities";
export const movieContainer  = selectElFromDom('.main-content')

export const MOVIE_API_URL = 'https://api.tvmaze.com/schedule/web?date=2020-05-29&country=US'