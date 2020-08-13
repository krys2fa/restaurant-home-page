import './style.css';
import { logo, navMenu } from './components/nav';
import { form } from './components/form';
import { specials, dishes } from './components/catalogue';


const navbar = () => {
  const nav = document.createElement('nav');
  const tabs = navMenu();

  nav.classList.add('flex-h');
  nav.appendChild(logo());
  nav.appendChild(tabs);
  return nav;
};

const homePageLoad = (content) => {
  document.body.classList.remove('home-bg');
  document.body.classList.add('home-bg');

  content.innerHTML = '';

  content.appendChild(navbar());

  const divElement = document.createElement('div');
  divElement.innerHTML = '<p>Your home of authentic ghanaian dishes...</p>';
  divElement.classList.add('banner-div');
  content.appendChild(divElement);
};

const clearPage = (content) => {
  document.body.classList.remove('home-bg');
  document.body.classList.add('main-bg');
  content.innerHTML = '';
};
const menuPageLoad = (content) => {
  clearPage(content);
  content.appendChild(navbar());
  content.appendChild(specials());
  content.appendChild(dishes());
};

const contactPageLoad = (content) => {
  clearPage(content);
  content.appendChild(navbar());
  content.appendChild(form());
};

export { homePageLoad, contactPageLoad, menuPageLoad };
