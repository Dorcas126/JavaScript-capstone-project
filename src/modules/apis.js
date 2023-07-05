import { MOVIE_API_URL } from './variables.js';

/* eslint no-underscore-dangle: ["error", {"allow": ["_embedded"]}] */
export const transformMovieData = (data) => {
  const transformedData = {
    id: data.id,
    name: data.name,
    summary: data.summary,
    type: data._embedded.show.type,
    language: data._embedded.show.language,
    rating: data._embedded.show.rating,
    officialSite: data._embedded.show.officialSite,
    image: data._embedded.show.image,
    description: data._embedded.show.summary,
  };

  return transformedData;
};

// get movies and likes
export const getMovieApi = async () => {
  const res = await fetch(MOVIE_API_URL);
  const json = await res.json();
  const data = json.map((json) => transformMovieData(json));
  return data;
};

// Transform APi
