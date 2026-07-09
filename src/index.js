import './style.css';
import renderHomePage from './home.js';
import renderMenuPage from './menu.js';
import renderAboutPage from './about.js';

const navbar = document.querySelector('nav');

navbar.addEventListener('click', (event) => {
  const target = event.target;
  console.dir(target);
  if (target.tagName === 'BUTTON') {
    if (target.dataset.tagName === 'home') {
      renderHomePage();
    } else if (target.dataset.tagName === 'menu') {
      renderMenuPage();
    } else {
      renderAboutPage();
    }
  }
});

renderHomePage();