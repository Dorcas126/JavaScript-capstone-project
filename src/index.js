import './style.css';
import useNavigation from './module/useNavigation.js';
import DomEvent from './module/DomEvents.js';
import refresh from './module/apiActions.js';
import { selectElsFromDom } from './module/DomUtilities.js';

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
