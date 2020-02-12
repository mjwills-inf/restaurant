const menuPageFunction = () => {

  const menuItems = {
    'Lorem': '£1',
    'Ipsum': '£2',
    'Dolor': '£3',
    'Sit': '£4',
    'Amet': '£5',
    'Consectetur': '£6',
    'Adipisicing': '£7',
    'Elit': '£8',
    'Harum': '£9',
    'Numquam': '£10',
    'Quo': '£11',
    'Maiires': '£12',
    'Mollitia': '£13',
  }
  
  const someText = ["Lorem ipsum dolor sit.", "Dolor sit amet consectetur adipisicing elit.",
      "Lorem ipsum dolor sit amet.", "Consequuntur!", "Porro, quia.", 
      "Sit amet consectetur adipisicing elit.", "Molestias, iste repudiandae.", 
      "Lorem ipsum dolor sit", "Lorem Ipsum", "Molestias, iste repudiandae.", 
      "Consectetur adipisicing elit. Molestias, iste repudiandae.", 
      "Lorem ipsum dolor sit.", "Ipsum Ipsum"]
  const keys = Object.keys(menuItems);
  const values = Object.values(menuItems);


  const content = document.getElementById('content');  
  const table = document.createElement('table');  
  content.appendChild(table);  

  for (let i = 0; i < keys.length; i++) {
    let row1 = document.createElement('tr');
    let row2 = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    td1.innerText = keys[i];
    td2.innerText = values[i];
    td3.innerText = someText[i]
    td3.className = "menu-item-desc"
    row1.appendChild(td1);
    row1.appendChild(td2);
    row2.appendChild(td3);
    table.appendChild(row1);
    table.appendChild(row2);     
  }  
}

export default menuPageFunction
