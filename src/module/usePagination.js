import {
  createElement,
  selectElFromDom,
} from './DomUtilities.js';

const usePagenation = (length, page) => {
  const pagenate = selectElFromDom('.pagnate-box');
  for (let i = 0; i < length; i += i) {
    const element = createElement('div');
    element.classList.add('pageBtn');
    if (i + 1 === page) {
      element.classList.add('active');
    }
    element.innerHTML = `${i + 1}`;

    pagenate.appendChild(element);
  }
};

export default usePagenation;
