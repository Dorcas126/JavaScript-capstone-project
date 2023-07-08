import { MOVIE_API_URL, BASE_URL, movieContainer } from './variables.js';

/* eslint no-underscore-dangle: ["error", {"allow": ["_embedded"]}] */
const transformMovieData = (data) => {
  const transformedData = {
    id: data.id,
    name: data.name,
    summary: data.summary ? data.summary : 'No description',
    type: data.type ? data.type : 'No available',
    language: data.language ? data.language : 'No available',
    rating: data.rating?.average ? data.rating : { average: 'N/A' },
    officialSite: data.officialSite,
    image: data.image,
    genres: data.genres ? data.genres : [],
  };

  return transformedData;
};

// get movies and likes
export const getMovieApi = async () => {
  const URLS = [fetch(MOVIE_API_URL), fetch(`${BASE_URL}/likes`)];
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
      `${BASE_URL}/comments?item_id=${id}`,
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
      `${BASE_URL}/comments`,
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

export const addLike = async (id) => {
  try {
    const res = await fetch(
      `${BASE_URL}/likes`,
      {
        method: 'POST',
        body: JSON.stringify({ item_id: id }),
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
