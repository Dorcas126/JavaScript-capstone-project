import { MOVIE_API_URL, LIKE_API_URL, movieContainer } from './variables.js';

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
  const URLS = [fetch(MOVIE_API_URL), fetch(LIKE_API_URL)];
  const movies = await Promise.all(URLS)
    .then((res) => {
      const response = res.map((data) => data.json());
      return Promise.all(response);
    }).then((data) => {
      const movie = data[0].map((movie) => {
        const transformDATA = transformMovieData(movie);
        const likeFound = data[1].find((like) => like.item_id === movie.id);
        const likes = likeFound ? likeFound.likes : 0;
        return { ...transformDATA, likes };
      });

      return movie;
    });

  return movies;
};

// Get comments for a specific movie
export const getcomments = async (id) => {
  try {
    const res = await fetch(
      `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JBO9bTrIwTWIlKbDRBlW/comments?item_id=${id}`,
    );
    const json = await res.json();
    return json;
  } catch (error) {
    movieContainer.innHTML = "<p style='color: red;'>Opps Error Occured! Failed to fetch";
  }
  return null;
};

export const addComment = async (data) => {
  try {
    const res = await fetch(
      'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/JBO9bTrIwTWIlKbDRBlW/comments',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (res) {
      return { isSuccess: true };
    }

    return 0;
  } catch (error) {
    return { isSuccess: false };
  }
};
