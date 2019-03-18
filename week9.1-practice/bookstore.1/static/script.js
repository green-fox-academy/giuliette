'use strict'

const xhr = new XMLHttpRequest();
xhr.open('GET', '/author'); //same as backend. method and endpointname!!
//xhr.send();
// xhr.onload = () => {
//   if (xhr.status === 200){
//     console.log(JSON.parse(xhr.responseText));
//   }
// }
xhr.onload = () => {
  if (xhr.status === 200){
    const res = (JSON.parse(xhr.responseText));
    authorTable(res);
  }
}
//
xhr.send(); 

const authorTable = (data) => {
  const tableDiv = document.querySelector('.mytable');
  // console.log(data);
  const tr = document.createElement('tr');
  // const th = document.createElement('th');
  const td = document.createElement('td');

  const thID = document.createElement('th');
  const thName = document.createElement('th');
  const thHome = document.createElement('th');
  const thCountry = document.createElement('th');
  thID.textContent = 'ID';
  thName.textContent = 'ame';
  thHome.textContent = 'city';
  thCountry.textContent = 'country';
  tr.appendChild(thID);
  tr.appendChild(thName);
  tr.appendChild(thHome);
  tr.appendChild(thCountry);
  tableDiv.appendChild(tr);
}