import { selectElFromDom } from './DomUtilities.js';
import { getLength } from './utilities.js';

const commentCounter = async (comments) => {
  const commentCounter = selectElFromDom('.comment-count');
  commentCounter.innerHTML = '---';

  if (!comments?.error) {
    const length = getLength(comments);
    commentCounter.innerHTML = `(${length})`;
  } else {
    commentCounter.innerHTML = '(0)';
  }
};

export default commentCounter;