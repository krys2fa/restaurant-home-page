import {
  homePageLoad, menuPageLoad, contactPageLoad,
} from './app';

const content = document.querySelector('#content');

homePageLoad(content);

const render = (content) => {
  clickedItem = event.tagert;

  if (clickedItem === 'Contact') {
    contactPageLoad(content);
  } else if (clickedItem === 'Menu') {
    menuPageLoad(content);
  } else {
    homePageLoad(content);
  }
};
