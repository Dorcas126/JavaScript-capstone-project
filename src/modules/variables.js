import { selectElFromDom, selectElsFromDom } from './DomUtilities.js';

export const movieContainer = selectElFromDom('.main-content');
export const main = selectElFromDom('main');
export const hamburger = selectElFromDom('.ham ');
export const mobileMenu = selectElFromDom('nav ul');
export const mobileMenuLinks = selectElsFromDom('nav ul li');

export const MOVIE_API_URL = 'https://api.tvmaze.com/shows?';
export const BASE_URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/1MJTPLTRJ5D10GoeU1e8';
