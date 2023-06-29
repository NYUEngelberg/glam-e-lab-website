import FixedNav from './fixed-nav';
import Overlay from './overlay';
import Modal from './modal';
import Nav from './nav';
import SlidePanel from './slide-panel';
import Utils from './utils';
import Footnotes from './footnotes';

Modal.init();
Nav.init();
Overlay.init();
Utils.markdownLinksNewPage();

if (window.location.pathname.includes('/outputs/')) {
  if (document.querySelector('.product-page')) {
    Footnotes.init();
    FixedNav.init();
    SlidePanel.init();

    // Insert div inside blockquote to create left border
    document.querySelectorAll('blockquote').forEach(item => {
      if (!item.classList.contains('pull-quote')) {
        item.insertAdjacentHTML('afterbegin', '<div class="border">');
      }
    });
  }
}