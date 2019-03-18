'use strict';

const button = document.querySelector('.send');
const urlField = document.querySelector('.url');
const aliasField = document.querySelector('.alias');
const message = document.querySelector('.message');

function post(path, data, cb) {

  const xhr = new XMLHttpRequest();

  xhr.open("POST", "http://localhost:8080" + path, true);
  xhr.setRequestHeader('Content-type','application/json; charset=utf-8');
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == "200") {
      cb(null, JSON.parse(xhr.responseText));
    } else {
      cb(JSON.parse(xhr.responseText));
    }
  }
  xhr.send(JSON.stringify(data));
}

button.addEventListener('click', e => {

  e.preventDefault();

  var aliasToSend = {
    url: urlField.value,
    alias: aliasField.value
  };

  post('/api/links', aliasToSend, (err, response) => {
    if (err) {
      message.innerText = 'Your alias is already in use!';
      message.classList.add('error');
      return;
    }
    message.innerText = `Your URL is aliased to ${response.alias} and your secret code is ${response.secret}.`;
    
    message.classList.remove('error');
  });
});
