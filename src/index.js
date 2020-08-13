import { homePageLoad, contactPageLoad, menuPageLoad } from './app';

const content = document.querySelector('#content');

homePageLoad(content);

const handleClick = () => {
  document
    .getElementById('menu-list')
    .addEventListener('click', (e) => render(content, e));
};

const render = (content, e) => {
  const clickedItem = e.target.innerHTML;

  if (clickedItem === 'CONTACT US') {
    contactPageLoad(content);
    handleClick();
  } else if (clickedItem === 'MENU') {
    menuPageLoad(content);
    handleClick();
  } else {
    homePageLoad(content);
    handleClick();
  }
};

handleClick();
