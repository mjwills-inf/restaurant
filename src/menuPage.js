menuPage = () => {

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

const content = document.getElementById('content');

let keys = Object.keys(menuItems)
let values = Object.values(menuItems)

let table = document.createElement('table');
content.appendChild(table);


for (i=0; menuItems.length; i++) {
  let row = document.createElement('tr');
  let td1 = document.createElement('td');
  let td2 = document.createElement('td');
  td1.innerText = keys[i];
  td2.innerText = values[i]
  row.appendChild(td1);
  row.appendChild(td2);
  table.appendChild(row);
}

content.appendChild(table)

}

export default menuPage
