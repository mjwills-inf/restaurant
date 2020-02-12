const nav = () => {
  const content = document.getElementById('content');
  let navBar = document.createElement('nav');
  
  
  let logo = document.createElement('img');
  logo.classList = 'navBar logo';
  logo.setAttribute('src', 'img/logo3.png')
  
  let linkContainer = document.createElement('div')
  linkContainer.id = 'link-container'

  let ul = document.createElement('ul');
  let liOne = document.createElement('li');
  let liTwo = document.createElement('li');
  let liThree= document.createElement('li');
  let liLogo = document.createElement('li')
  

  let aboutLink = document.createElement ('a');
  aboutLink.classList = 'navBar aboutLink';
  aboutLink.innerText = 'About';
  
  let menuLink = document.createElement ('a');
  menuLink.classList = 'navBar menuLink';
  menuLink.innerText = 'Menu';
  
  let contactLink = document.createElement ('a');  
  contactLink.classList = 'navBar contactLink';
  contactLink.innerText = 'Contact';
  
  
  navBar.appendChild(linkContainer);
  linkContainer.appendChild(ul);
  ul.appendChild(liLogo);
  ul.appendChild(liOne);
  ul.appendChild(liTwo);
  ul.appendChild(liThree);
  liLogo.appendChild(logo);
  liOne.appendChild(menuLink);
  liTwo.appendChild(aboutLink);
  liThree.appendChild(contactLink);
  
  content.appendChild(navBar);
}

export default nav