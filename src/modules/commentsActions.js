import { createElement, selectElFromDom } from "./DomUtilities";
import { getcomments, addComment } from "./apis";
import { setFormInfo } from "./utilities";

export const displayComments = async (id) => {
  const commentsWrapper = selectElFromDom(".commentsBox");
  commentsWrapper.innerHTML = "<p>LOADING COMMENTS...</p>";

  const comments = await getcomments(id);
  if (comments.error) {
    commentsWrapper.innerHTML = "<p>No comments under this movie</p>";
  } else {
    commentsWrapper.innerHTML = null;
    const p = createElement("p");
    p.innerHTML = `Comments (${comments.length})`;
    commentsWrapper.appendChild(p);
    comments.forEach((comment) => {
      const p = createElement("p");
      p.innerHTML = `
              <span>${comment.creation_date}</span>
                 <span>${comment.username}: </span>
                 <span>${comment.comment}</span>
              `;
      commentsWrapper.appendChild(p);
    });
  }
};

export const addNewComment = async (id) => {
  let userName = selectElFromDom("#userName");
  let comment = selectElFromDom("#comment");
  if (userName.value.trim() === "" || comment.value.trim() === "") {
    setFormInfo;
    setFormInfo("error", "Please all filed is required");
    return null;
  }
  const res = await addComment({
    item_id: id,
    username: userName.value,
    comment: comment.value,
  });
  if (!res.isSuccess) {
    setFormInfo("error", "Opps error occured! Try gain later");
  } else {
    setFormInfo("success", "You have submitted your comment");
    comment.value = null;
    userName.value = null;
    displayComments(id);
  }
};
