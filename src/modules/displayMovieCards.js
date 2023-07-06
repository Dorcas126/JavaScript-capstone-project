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
            <img
              src="${movie.image?.medium}"
              alt="${movie.name}"
              class='movie-img'
            />
            <div class="title">
              <p>${movie.name}</p>
              <div>
                <span id='${movie.id}' class='like-btn'><i class="fa-regular fa-heart" id='love${movie.id}'></i></span>
             
                <p class='like-counter${movie.id}'>${movie.likes}</p>
              </div>
            </div>
            <button class="comment-btn">
              <span>
                <p>Comments</p>
                <i class="fa-solid fa-angle-down"></i>
              </span>
            </button>
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
    DomEvent(likeBtn, 'click', () => {
      likeCount(likeBtn.id);
    });
  });
};

export default displayMovies;
