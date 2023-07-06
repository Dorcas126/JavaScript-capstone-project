import { selectElFromDom } from './DomUtilities.js';

export const movieContainer = selectElFromDom('.main-content');
export const main = selectElFromDom('main');

export const MOVIE_API_URL = 'https://api.tvmaze.com/shows?page=1';
export const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1MJTPLTRJ5D10GoeU1e8';
