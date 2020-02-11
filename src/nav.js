const nav = () => {
  const content = document.getElementById('content');
  let navBar = document.createElement('nav');
  let logo = document.createElement('img');
  logo.classList = 'navBar logo';
  logo.setAttribute('src', 'img/logo3.png')
  let aboutLink = document.createElement ('a');
  aboutLink.classList = 'navBar aboutLink';
  aboutLink.innerText = 'About';
  let menuLink = document.createElement ('a');
  menuLink.classList = 'navBar menuLink';
  menuLink.innerText = 'Menu';
  let contactLink = document.createElement ('a');  
  contactLink.classList = 'navBar contactLink';
  contactLink.innerText = 'Contact';
  
  navBar.appendChild(logo);
  navBar.appendChild(menuLink);
  navBar.appendChild(aboutLink);
  navBar.appendChild(contactLink);
  content.appendChild(navBar);
}

export default nav