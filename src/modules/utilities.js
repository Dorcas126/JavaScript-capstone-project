import { selectElFromDom } from './DomUtilities.js';

export const switchClass = (element, classname, message) => {
  element.classList.add(classname);
  element.innerHTML = message;
  setTimeout(() => {
    element.classList.remove(classname);
    element.innerHTML = null;
  }, 3000);
};

export const setFormInfo = (msgType, message) => {
  const fromMessage = selectElFromDom('.form-message');
  switch (msgType) {
    case 'success':
      switchClass(fromMessage, 'success', message);
      break;
    case 'error':
      switchClass(fromMessage, 'error', message);
      break;
    case 'warn':
      switchClass(fromMessage, 'warn', message);
      break;
    default:
      break;
  }
};
