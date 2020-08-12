import { homePageLoad, contactPageLoad, menuPageLoad } from './app';

const content = document.querySelector('#content');

homePageLoad(content);

const render = (content, e) => {
  const clickedItem = e.target.innerHTML;
  // console.log(e.target.innerHTML);

  if (clickedItem === 'CONTACT US') {
    contactPageLoad(content);
  } else if (clickedItem === 'MENU') {
    menuPageLoad(content);
  } else {
    homePageLoad(content);
  }
};

document
  .getElementById('menu-list')
  .addEventListener('click', (e) => render(content, e));
