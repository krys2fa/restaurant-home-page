import { homePageLoad, contactPageLoad, menuPageLoad } from './app';

const content = document.querySelector('#content');

homePageLoad(content);

const render = (content, e) => {
  const clickedItem = e.target.innerHTML;

  if (clickedItem === 'CONTACT US') {
    contactPageLoad(content);
    // eslint-disable-next-line no-use-before-define
    handleClick();
  } else if (clickedItem === 'MENU') {
    menuPageLoad(content);
    // eslint-disable-next-line no-use-before-define
    handleClick();
  } else {
    homePageLoad(content);
    // eslint-disable-next-line no-use-before-define
    handleClick();
  }
};

const handleClick = () => {
  document
    .getElementById('menu-list')
    .addEventListener('click', (e) => render(content, e));
};

handleClick();
