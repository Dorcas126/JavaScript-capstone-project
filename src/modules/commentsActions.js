import { createElement, selectElFromDom } from './DomUtilities.js';
import { getcomments, addComment } from './apis.js';
import commentCounter from './commentCounter.js';
import { setFormInfo } from './utilities.js';

export const displayComments = async (id, pageLoads) => {
  const commentsWrapper = selectElFromDom('.commentsBox');
  if (pageLoads) {
    commentsWrapper.innerHTML = '<p>LOADING COMMENTS...</p>';
  }

  const comments = await getcomments(id);
  if (!comments.error) {
    commentsWrapper.innerHTML = null;
    comments.forEach((comment) => {
      const p = createElement('p');
      p.innerHTML = `
              <span>${comment.creation_date}</span>
                 <span>${comment.username}: </span>
                 <span>${comment.comment}</span>
              `;
      commentsWrapper.appendChild(p);
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
  if (userName.value.trim() === '' || comment.value.trim() === '') {
    setFormInfo('error', 'Please all filed is required');
    return null;
  }
  const res = await addComment({
    item_id: id,
    username: userName.value,
    comment: comment.value,
  });
  submitBtn.value = 'Submitting...';
  if (res.isSuccess) {
    setFormInfo('success', 'You have submitted your comment');
    comment.value = null;
    userName.value = null;
    submitBtn.value = 'Submit';
    displayComments(id);
  } else {
    setFormInfo('error', 'Opps error occured! Try gain later');
    submitBtn.value = 'Submit';
  }

  return 0;
};
