import './style.css';
import { logo, navMenu } from './components/nav';
import { form } from './components/form';

const homePageLoad = (content) => {
  document.body.classList.add('home-bg');
  const nav = document.createElement('nav');
  const tabs = navMenu();

  nav.classList.add('flex-h');
  nav.appendChild(logo());
  nav.appendChild(tabs);

  content.appendChild(nav);

  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>Your home of authentic ghanaian dishes...</p>';
  divElement.classList.add('banner-div');
  content.appendChild(divElement);
};

const clearPage = (content) => {
  const bannerDiv = document.querySelector('.banner-div');
  document.body.classList.remove('home-bg');
  document.body.classList.add('main-bg');
  content.removeChild(bannerDiv);
};

const menuPageLoad = (content) => {
  clearPage(content);
};

const contactPageLoad = (content) => {
  clearPage(content);
  content.appendChild(form());
};

export { homePageLoad, contactPageLoad, menuPageLoad };
