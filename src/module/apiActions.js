import { createElement } from './DomUtilities.js';
import { getMovieApi } from './apis.js';
import displayMovies from './displayMovieCards.js';
import { movieContainer } from './variables.js';
// List item on page

const refresh = async (pageNumber) => {
  movieContainer.innerHTML = null;
  const loader = createElement('div');
  loader.classList.add('loader');
  loader.innerHTML = `
  <div class="spinner">
          <div></div>
          <div></div>
        </div>
  `;
  movieContainer.appendChild(loader);
  const movies = await getMovieApi(pageNumber);
  if (movies) {
    displayMovies(movies, pageNumber);
    return { loaded: true };
  }

  return 0;
};

export default refresh;
