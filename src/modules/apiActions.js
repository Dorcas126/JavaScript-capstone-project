import { getMovieApi } from './apis.js';
import displayMovies from './displayMovieCards.js';
import { movieContainer } from './variables.js';
// List item on page

const refresh = async () => {
  const movies = await getMovieApi();
  if (!movies) {
    movieContainer.innerHTML = '<h1>LOADING<h1>';
  }
  displayMovies(movies);
};

export default refresh;