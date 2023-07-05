import DomEvent from './DomEvents.js';
import { createElement, selectElFromDom } from './DomUtilities.js';
import { main } from './variables.js';

const printModalBox = (movie) => {
  // create modal box background
  const modalContainer = createElement('div');
  modalContainer.classList.add('modalBox');

  // create modal box innner
  const modalBoxContent = createElement('div');
  modalBoxContent.classList.add('modalContentWrapper');
  const movieImage = movie.image?.medium
    ? `<img src='${movie.image.medium}' alt='${movie.name}' >`
    : ' <p>No image found</p>';

  modalBoxContent.innerHTML = `
 <button class="modal-close-btn">x</button>
      <div class="image-box">
      ${movieImage}
      </div>
      <p class="pop-title">${movie.name}</p>
      <div class="info">
        <p>Likes: 453</p>
        <p>Type: ${movie.type}</p>
        <p>Language: ${movie.language}</p>
        <p>Official Site: <a href='${
  movie.officialSite
} target='_blank'>Viste site</a> </p>
        ${movie?.rating?.average ? `<p>Rating: ${movie.rating.average}</p>` : '<p></p>'}
      </div>
      <p class="comments-head">Comments</p>
      <hr>
 `;

  // update modal box background
  modalContainer.appendChild(modalBoxContent);
  document.body.style.overflowY = 'hidden';
  main.appendChild(modalContainer);

  const closeBtn = selectElFromDom('.modal-close-btn');
  DomEvent(closeBtn, 'click', () => {
    main.removeChild(modalContainer);
    document.body.style.overflowY = 'auto';
  });
};

export default printModalBox;
