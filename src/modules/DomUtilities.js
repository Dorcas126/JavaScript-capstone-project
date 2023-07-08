// Select element from DOM
export const selectElFromDom = (element) => {
  const el = document.querySelector(element);

  return el;
};

// Select multiple elements from DOM
export const selectElsFromDom = (elements) => {
  const els = document.querySelectorAll(elements);

  return els;
};

// Create element in DOm
export const createElement = (elementType) => {
  const element = document.createElement(elementType);

  return element;
};
