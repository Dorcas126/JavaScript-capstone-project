import './style.css';
import useNavigation from './modules/useNavigation.js';
import DomEvent from './modules/DomEvents.js';
import refresh from './modules/apiActions.js';
import { selectElsFromDom } from './modules/DomUtilities.js';

DomEvent(document, 'DOMContentLoaded', async () => {
  const movieLoaded = await refresh(1);
  useNavigation();

  if (movieLoaded) {
    const pageBtns = selectElsFromDom('.pageBtn');
    pageBtns.forEach((btn, index) => {
      DomEvent(btn, 'click', () => {
        refresh(index + 1);
      });
    });
  }
});
