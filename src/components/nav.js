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
  const homeListElement = document.createElement('li');
  const menuListElement = document.createElement('li');
  const contactListElement = document.createElement('li');

  homeListElement.innerHTML = 'Home';
  menuListElement.innerHTML = 'Menu';
  contactListElement.innerHTML = 'Contact Us';

  ulElement.appendChild(homeListElement);
  ulElement.appendChild(menuListElement);
  ulElement.appendChild(contactListElement);
  return ulElement;
};

export { logo, navMenu };
