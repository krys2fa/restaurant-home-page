// import Banner from '../images/banner.jpg';
import Fufu from '../images/fufu.jpg';
import Banku from '../images/banku.jpg';
import Jollof from '../images/jollof.jpg';
import Waakye from '../images/waakye.jpg';
import Kenkey from '../images/kenkey.jpg';

const imageCreator = (source, cssClass) => {
  const image = new Image();
  image.src = source;
  image.classList.add(cssClass);
  return image;
};

const dishCreator = (picture, cssClass, name, price) => {
  const dish = document.createElement('div');
  const dishDetail = document.createElement('div');

  const img = imageCreator(picture, cssClass);

  const dishName = document.createElement('h3');
  dishName.innerHTML = name;

  const dishPrice = document.createElement('p');
  dishPrice.innerHTML = price;

  dishDetail.appendChild(dishName);
  dishDetail.appendChild(dishPrice);

  dish.appendChild(img);
  dish.appendChild(dishDetail);

  dish.classList.add('flex-h');

  return dish;
};

const specials = () => {
  const specialOffer = document.createElement('div');
  specialOffer.innerHTML = '<h3>SPECIAL OFFER</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';

  const dishOne = dishCreator(Banku, 'logo', 'Banku', 'GHS 15.50');
  const dishTwo = dishCreator(Waakye, 'logo', 'Waakye', 'GHS 25.00');
  const dishThree = dishCreator(Jollof, 'logo', 'Jollof Rice', 'GHS 12.00');

  const imgDiv = document.createElement('div');
  imgDiv.classList.add('img-div', 'flex-h');

  imgDiv.appendChild(dishOne);
  imgDiv.appendChild(dishTwo);
  imgDiv.appendChild(dishThree);

  specialOffer.appendChild(imgDiv);

  specialOffer.classList.add('special-offer');

  return specialOffer;
};

const dishes = () => {
  const items = document.createElement('div');
  const itemList = document.createElement('div');
  const itemsOne = document.createElement('div');
  const itemsTwo = document.createElement('div');

  itemList.classList.add('flex-h', 'items-list');

  const dishOne = dishCreator(Kenkey, 'logo', 'Kenkey', 'GHS 15.50');
  const dishTwo = dishCreator(Fufu, 'logo', 'Fufu', 'GHS 25.00');

  itemsOne.appendChild(dishOne);
  itemsTwo.appendChild(dishTwo);

  items.innerHTML = '<h3>MENU</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>';
  itemList.appendChild(itemsOne);
  itemList.appendChild(itemsTwo);
  items.appendChild(itemList);

  items.classList.add('dish');

  return items;
};


export { specials, dishes };
