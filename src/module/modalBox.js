import DomEvent from './DomEvents.js';
import { createElement, selectElFromDom } from './DomUtilities.js';
import { displayComments, addNewComment } from './commentsActions.js';
import { main } from './variables.js';

const printModalBox = (movie) => {
  // create modal box background
  const modalContainer = createElement('div');
  modalContainer.classList.add('modalBox');

  // create modal box innner
  const modalBoxContent = createElement('div');
  modalBoxContent.classList.add('modalContentWrapper');

  // go back buton
  const button = createElement('button');
  button.setAttribute('class', 'modal-close-btn');
  button.innerHTML = '&lt; Back to all movies ';
  modalBoxContent.appendChild(button);

  // Image countainer
  const div1 = createElement('div');
  div1.setAttribute('class', 'image-box');
  div1.innerHTML = `
  <div class="img-overlay"></div>
  <img src="${movie.image?.original}" alt="${movie.name}">
  `;
  modalBoxContent.appendChild(div1);

  // Image countainer
  const div2 = createElement('div');
  div2.setAttribute('class', 'modal-content');
  div2.innerHTML = `
    <p class="pop-title">${movie.name}</p>
      <ul class="genre">
      ${movie.genres.map((gen) => `<li>${gen}</li>`).join('')}
        
      </ul>
      <a href="${movie.officialSite}" class="info-link" target="_blank">
        <i id="watch" class='fa-solid fa-play'></i>
        <p>Watch</p>
      </a>
      <div class="info">
        <div class="info-card">
          <i id="likes" class="fa-solid fa-heart"></i>
          <p class="info-value">${movie.likes}</p>
          <p class="info-lable">Likes</p>
        </div>
        <div class="info-card">
          <i id="rating" class="fa-solid fa-star"></i>
          <p class="info-value">${movie.rating.average}</p>
          <p class="info-lable">Rating</p>
        </div>
        <div class="info-card">
          <i id="language" class="fa-solid fa-language"></i>
          <p class="info-value">${movie.language}</p>
          <p class="info-lable">Language</p>
        </div>
        <div class="info-card">
          <i id="types" class="fa-solid fa-circle-info"></i>
          <p class="info-value">${movie.type}</p>
          <p class="info-lable">Type</p>
        </div>

      </div>
      <details>
        <summary class="description-1">Description</summary>
        <div class="description-p">
          <p>${movie.summary}</p>
        </div>
      </details>
    `;
  modalBoxContent.appendChild(div2);

  // Comment heading
  const h3 = createElement('h3');
  h3.setAttribute('class', 'h3-comment');
  h3.innerHTML = " Comments <span class='comment-count'></span> ";
  modalBoxContent.appendChild(h3);

  // Comment form and display
  const div3 = createElement('div');
  div3.setAttribute('class', 'commentsBox');
  div3.innerHTML = `
  <div class="comment-item comment-list"></div>

  <form class="comment-item">
 <h3>Add new comment</h3>
 <p class="form-message"></p>
   <input type="text" name="userName" id="userName" placeholder="User name">
   <textarea name="comment" id="comment" cols="30" rows="10" placeholder="Your insight"></textarea>
   <input type="submit" id="submit-comment" value='submit'>
</form>
  
  `;
  modalBoxContent.appendChild(div3);

  // update modal box background
  modalContainer.appendChild(modalBoxContent);
  document.body.style.overflowY = 'hidden';
  main.appendChild(modalContainer);

  // Update comment
  displayComments(movie.id, true);

  // get form data

  const submitBtn = selectElFromDom('#submit-comment');
  DomEvent(submitBtn, 'click', (e) => {
    e.preventDefault();
    addNewComment(movie.id);
  });

  const closeBtn = selectElFromDom('.modal-close-btn');
  DomEvent(closeBtn, 'click', () => {
    main.removeChild(modalContainer);
    document.body.style.overflowY = 'auto';
  });
};

export default printModalBox;
