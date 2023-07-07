import './style.css';

import DomEvent from './modules/DomEvents.js';
import refresh from './modules/apiActions.js';

DomEvent(document, 'DOMContentLoaded', () => {
  refresh();
});
