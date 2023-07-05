import { MOVIE_API_URL } from './variables.js';

/* eslint no-underscore-dangle: ["error", {"allow": ["_embedded"]}] */
 const transformMovieData = (data) => {
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

// Get comments for a specific movie
export const getcomments = async (id) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JBO9bTrIwTWIlKbDRBlW/comments?item_id=${id}`);
  const json = await res.json();
  return json;
};

