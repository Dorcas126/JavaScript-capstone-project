import { selectElFromDom } from './DomUtilities.js';

export const movieContainer = selectElFromDom('.main-content');
export const main = selectElFromDom('main');

export const MOVIE_API_URL = 'https://api.tvmaze.com/schedule/web?date=2020-05-29';