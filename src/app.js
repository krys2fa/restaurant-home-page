import './style.css';
import { logo, navMenu } from './components/nav';

const homePageLoad = (content) => {
  const nav = document.createElement('nav');

  nav.classList.add('flex-h');
  nav.appendChild(logo());
  nav.appendChild(navMenu());

  content.appendChild(nav);

  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>Your home of authentic ghanaian dishes</p>';
  content.appendChild(divElement);
};

const menuPageLoad = (content) => {

};

const contactPageLoad = (content) => {

};

export {
  homePageLoad, menuPageLoad, contactPageLoad,
};
