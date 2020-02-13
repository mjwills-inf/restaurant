// import {myFunctionOne, myFunctionTwo} from '.loadout'

import nav from './nav';
import menuPageFunction from './menuPage';
import homeLoad from './loadout';
import aboutPage from './aboutPage';
import contactPage from './contactPage'

nav();
homeLoad();

const content = document.getElementById('content');

let contactListen = document.querySelector('#contactLink');
let aboutListen = document.querySelector('#aboutLink');
let menuListen = document.querySelector('#menuLink');



const linkFunction = (event) => {
   switch (event.target.id) {
     case "contactLink":
      content.removeChild(content.childNodes[2]);
      contactPage();
     break;
     case "aboutLink":
      content.removeChild(content.childNodes[2]);
      aboutPage();
     break;
     case "menuLink":
      content.removeChild(content.childNodes[2]);
      menuPageFunction();
     break;
   }
}

contactListen.addEventListener('click', linkFunction);
aboutListen.addEventListener('click', linkFunction);
menuListen.addEventListener('click', linkFunction);

