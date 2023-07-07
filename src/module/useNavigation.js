import DomEvent from './DomEvents.js';
import { hamburger, mobileMenu, mobileMenuLinks } from './variables.js';

const useNavigation = () => {
  DomEvent(hamburger, 'click', () => {
    mobileMenu.classList.toggle('active');
  });
  mobileMenuLinks.forEach((link) => {
    DomEvent(link, 'click', () => {
      mobileMenu.classList.remove('active');
    });
  });
};

export default useNavigation;
