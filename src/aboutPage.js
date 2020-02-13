const aboutPage = () => {
  const content = document.getElementById('content');  
  
  const divAbout = document.createElement('div')
  divAbout.id = 'about-container';
  const h3One = document.createElement('h3');
  const h3Two = document.createElement('h3');
  const h3Three = document.createElement('h3');
  const pOne = document.createElement('p');
  const pTwo = document.createElement('p');
  const pThree = document.createElement('p');

  h3One.innerText = 'Lorem ipsum, dolor sit amet';
  h3Two.innerText = 'Lorem ipsum ';
  h3Three.innerText = 'Lorem ipsum dolor';
  pOne.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore in dolorum aliquid ratione nam. Amet atque dolore vitae, minus ipsam distinctio cum excepturi tenetur, incidunt quo praesentium aperiam debitis unde.';
  pTwo.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo magnam molestiae alias esse perspiciatis corporis suscipit atque quaerat, modi saepe numquam quas. Quisquam error neque maiores odio voluptatem veniam similique soluta! Eum debitis sequi suscipit quod nulla eaque modi totam porro labore nihil quaerat, ratione soluta, odio quos impedit eius doloremque maiores? Aspernatur et, ratione cumque totam accusamus hic error deserunt itaque natus reprehenderit? Quae, natus mollitia sequi exercitationem voluptate itaque aperiam distinctio modi rerum eligendi. Similique a cum culpa!';
  pThree.innerText = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde accusamus veniam dolorum incidunt omnis recusandae aperiam illo repudiandae doloremque perspiciatis';

  divAbout.appendChild(h3One);
  divAbout.appendChild(pOne);
  divAbout.appendChild(h3Two);
  divAbout.appendChild(pTwo);
  divAbout.appendChild(h3Three);
  divAbout.appendChild(pThree);

  content.appendChild(divAbout);

  
}

export default aboutPage