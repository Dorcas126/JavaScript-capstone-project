import { createElement } from "./DomUtilities.js";
import { getMovieApi } from "./apis.js";
import displayMovies from "./displayMovieCards.js";
import { movieContainer } from "./variables.js";
// List item on page

const refresh = async () => {
  let loader = createElement("div");
  loader.classList.add("loader");
  loader.innerHTML = `
  <div class="spinner">
          <div></div>
          <div></div>
        </div>
  `;
  movieContainer.appendChild(loader);
  const movies = await getMovieApi();
  if (movies) {
    displayMovies(movies);
  }
};

export default refresh;
