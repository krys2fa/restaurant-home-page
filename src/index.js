import './style.css';
import { logo, navMenu } from './components/nav';

const content = document.querySelector('#content');

const nav = document.createElement('nav');

nav.appendChild(logo());
nav.appendChild(navMenu());

content.appendChild(nav);
