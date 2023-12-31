import headerFixed from './modules/headerFixed';
import mobileMenu from './modules/mobileMenu';
import initSwiper from './modules/swiper';
import initAnimation from './modules/animationElements';
import backToTop from './modules/backToTop';
import initSearchBox from './modules/searchBox';
import { Dropdown, Ripple, initTE } from 'tw-elements';
import toggleGallery from './modules/toggleGallery';

import '../main.css';
require('fslightbox');
initTE({ Dropdown, Ripple });
toggleGallery();
initSearchBox();

document.addEventListener('DOMContentLoaded', () => {
  headerFixed();
  mobileMenu();
  initSwiper();
  initAnimation();
  backToTop();
});

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
}
