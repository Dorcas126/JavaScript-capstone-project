import './style.css';
import useNavigation from './modules/useNavigation.js';
import DomEvent from './modules/DomEvents.js';
import refresh from './modules/apiActions.js';

DomEvent(document, 'DOMContentLoaded', () => {
  refresh();
  useNavigation();
});
