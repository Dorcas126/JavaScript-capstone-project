import { movieContainer } from './variables.js';
import { createElement } from './DomUtilities.js';

const displayMovies = (movies) => {
  movieContainer.innerHTML = null;
  movies.forEach((movie) => {
    const movieCard = createElement('div');
    movieCard.classList.add('movie-card');
    const movieCardContent = `
            <img
              src="${movie.image?.medium}"
              alt="${movie.name}"
              class='movie-img'
            />
            <div class="title">
              <p>${movie.name}</p>
              <div>
                <span><i class="like-btn fa-solid fa-thumbs-up"></i></span>
                <span>10</span>
              </div>
            </div>
            <button class="comment-btn">
              <span>
                <p>Comments</p>
                <i class="fa-solid fa-angle-down"></i>
              </span>
              <span>320</span>
            </button>
   `;

    movieCard.innerHTML = movieCardContent;
    movieContainer.appendChild(movieCard);
  });
};

export default displayMovies;