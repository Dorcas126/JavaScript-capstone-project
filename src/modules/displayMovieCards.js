import { movieContainer } from './variables.js';
import { createElement, selectElsFromDom } from './DomUtilities.js';

import DomEvent from './DomEvents.js';
import printModalBox from './modalBox.js';
import likeCount from './likeCounter.js';

const displayMovies = async (movies) => {
  movieContainer.innerHTML = null;
  movies.forEach((movie) => {
    const movieCard = createElement('div');
    movieCard.classList.add('movie-card');
    const movieCardContent = `
    <img src="${movie.image?.medium}" alt="${movie.name}" class='movie-img' />
    <div class="card-content">
      <p class="title">Kirby Buckets</p>

      <div class="comments">
        <button class="comment-btn">
          Comments
        </button>
        <div class="likes">
          <span id='${movie.id}' class='like-btn'><i class="fa-regular fa-heart" id='love${movie.id}'></i></span>
          <p class='like-count like-counter${movie.id}'>${movie.likes}</p>
        </div>
      </div>

    </div>

   `;

    movieCard.innerHTML = movieCardContent;
    movieContainer.appendChild(movieCard);
  });

  const openModalBtns = selectElsFromDom('.comment-btn');
  const likeBtns = selectElsFromDom('.like-btn');
  openModalBtns.forEach((btn, index) => {
    DomEvent(btn, 'click', () => {
      printModalBox(movies[index]);
    });
  });
  likeBtns.forEach((likeBtn) => {
    DomEvent(likeBtn, 'click', (e) => {
      likeCount(e,likeBtn.id);
    });
  });
};

export default displayMovies;
