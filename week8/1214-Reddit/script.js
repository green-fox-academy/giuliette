'use strict'

const wrapper = document.querySelector('.wrapper');
const header = document.querySelector('header');
const headerImg = document.createElement('img');

/* Catch the elements */ 

const maincontent = document.querySelector('.feed');
const apiUrl = 'http://secure-reddit.herokuapp.com/posts';

/* Set the AJAX */ 

const sendHttpRequest = (url, method, callback) => {
  const xmlRequest = new XMLHttpRequest();
  xmlRequest.open(method, url);
  xmlRequest.onload = () => {
    if (xmlRequest.status === 200) {
      callback(JSON.parse(xmlRequest.responseText));
    }
  }
  xmlRequest.send();
}

sendHttpRequest(apiUrl, 'GET', (response) => {
  data = response.posts 
  console.log(data);
  // renderDiv(data);
})
