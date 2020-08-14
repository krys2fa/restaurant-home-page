import Banner from '../images/banner.jpg';

const logo = () => {
  const divElement = document.createElement('div');
  const logoImage = new Image();
  logoImage.src = Banner;
  logoImage.classList.add('logo');
  divElement.appendChild(logoImage);
  return divElement;
};

const navMenu = () => {
  const ulElement = document.createElement('ul');
  ulElement.setAttribute('id', 'menu-list');
  const homeListElement = document.createElement('li');
  const menuListElement = document.createElement('li');
  const contactListElement = document.createElement('li');

  homeListElement.innerHTML = 'HOME';
  menuListElement.innerHTML = 'MENU';
  contactListElement.innerHTML = 'CONTACT US';

  ulElement.classList.add('flex-h');
  ulElement.appendChild(homeListElement);
  ulElement.appendChild(menuListElement);
  ulElement.appendChild(contactListElement);
  return ulElement;
};

export { logo, navMenu };
