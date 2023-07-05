import DomEvent from './DomEvents.js';
import { createElement, selectElFromDom } from './DomUtilities.js';
import { getcomments } from './apis.js';
import { main } from './variables.js';

const refreshComments = async (id) => {
  const commentsWrapper = selectElFromDom('.commentsBox');
  commentsWrapper.innerHTML = '<p>LOADING COMMENTS...</p>';
  const comments = await getcomments(id);
  if (comments.error) {
    commentsWrapper.innerHTML = '<p>No comments under this movie</p>';
  } else {
    commentsWrapper.innerHTML = null;
    const p = createElement('p');
    p.innerHTML = `Comments (${comments.length})`;
    commentsWrapper.appendChild(p);
    comments.forEach((comment) => {
      const p = createElement('p');
      p.innerHTML = `
            <span>${comment.creation_date}</span>
               <span>${comment.username}: </span>
               <span>${comment.comment}</span>
            `;
      commentsWrapper.appendChild(p);
    });
  }
};

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
        ${
  movie?.rating?.average
    ? `<p>Rating: ${movie.rating.average}</p>`
    : '<p></p>'
}
      </div>
      <hr>
      <div class="commentsBox">

      </div>
      
     
 `;

  // update modal box background
  modalContainer.appendChild(modalBoxContent);
  document.body.style.overflowY = 'hidden';
  main.appendChild(modalContainer);

  // Update comment
  refreshComments(movie.id);

  const closeBtn = selectElFromDom('.modal-close-btn');
  DomEvent(closeBtn, 'click', () => {
    main.removeChild(modalContainer);
    document.body.style.overflowY = 'auto';
  });
};

export default printModalBox;
