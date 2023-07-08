import { format } from 'timeago.js';
import { createElement, selectElFromDom } from './DomUtilities.js';
import { getcomments, addComment } from './apis.js';
import commentCounter from './commentCounter.js';
import { setFormInfo } from './utilities.js';

export const displayComments = async (id, pageLoads) => {
  const commentsWrapper = selectElFromDom('.comment-list');
  if (pageLoads) {
    commentsWrapper.innerHTML = '<p>LOADING COMMENTS...</p>';
  }

  const comments = await getcomments(id);
  if (!comments.error) {
    commentsWrapper.innerHTML = null;
    comments.forEach((comment) => {
      const div = createElement('div');
      div.classList.add('comment-user');
      div.innerHTML = `
      <div class="user-details">
      <div class="img">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="dp">
      </div>

      <p class="user-name">${comment.username}</p>
  </div>
  <p class="user-comment">${comment.comment} </p>
  <p class="date">
      Posted <time datetime="${comment.creation_date}">
      ${format(`${comment.creation_date}`)} ago</time>.
  </p>
      `;
      commentsWrapper.appendChild(div);
      commentsWrapper.scrollTop = commentsWrapper.scrollHeight;
    });
  } else {
    commentsWrapper.innerHTML = '<p>No comments under this movie</p>';
  }

  commentCounter(comments);
};

export const addNewComment = async (id) => {
  const userName = selectElFromDom('#userName');
  const comment = selectElFromDom('#comment');
  const submitBtn = selectElFromDom('#submit-comment');
  submitBtn.value = 'Submitting...';
  if (userName.value.trim() === '' || comment.value.trim() === '') {
    setFormInfo('error', 'Please all filed is required');
    submitBtn.value = 'Submit';
    return null;
  }
  const res = await addComment({
    item_id: id,
    username: userName.value,
    comment: comment.value,
  });

  if (res.isSuccess) {
    setFormInfo('success', 'You have submitted your comment');
    comment.value = null;
    userName.value = null;
    displayComments(id);
  } else {
    setFormInfo('error', 'Opps error occured! Try gain later');
  }
  submitBtn.value = 'Submit';

  return 0;
};
