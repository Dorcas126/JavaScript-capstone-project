import { selectElFromDom } from './DomUtilities.js';
import { addLike } from './apis.js';

const likeCount = async (id) => {
  const likeSpanCounter = selectElFromDom(`.like-counter${id}`);
  const loveBtn = selectElFromDom(`#love${id}`);

  if (loveBtn.classList.contains('fa-solid')) {
    loveBtn.classList.replace('fa-solid', 'fa-regular');
    likeSpanCounter.innerHTML = parseInt(likeSpanCounter.textContent, 10) - 1;
  } else if (!loveBtn.classList.contains('like-before')) {
    const res = await addLike(id.js);
    if (res) {
      loveBtn.classList.replace('fa-regular', 'fa-solid');
      loveBtn.classList.add('like-before');
      likeSpanCounter.innerHTML = parseInt(likeSpanCounter.textContent, 10) + 1;
    }
  } else {
    loveBtn.classList.replace('fa-regular', 'fa-solid');
    likeSpanCounter.innerHTML = parseInt(likeSpanCounter.textContent, 10) + 1;
  }
};

export default likeCount;
