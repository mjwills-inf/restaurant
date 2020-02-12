const homeLoad = () => {
  const content = document.getElementById('content');
  const titleContain = document.createElement('div');
  titleContain.id = 'title-container';
  const h1 = document.createElement('h1');
  h1.className = 'name';
  h1.innerText ='Ipsum';
  const h1Two = document.createElement('h1');
  h1Two.className = 'name';
  h1Two.innerText ='Coffee House';
  const h2 = document.createElement('h2');
  h2.id = 'tag';
  h2.innerText = '[Something something, something here something.]'
  
  content.appendChild(titleContain); 
  titleContain.appendChild(h1);
  titleContain.appendChild(h1Two);
  titleContain.appendChild(h2);
}

export default homeLoad

