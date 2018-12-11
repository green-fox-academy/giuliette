'use strict'

const URL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=324a472f04c94c618e7702cca1e7cc5c&q=moon&landing&apollo&11';
const xhr = new XMLHttpRequest();
xhr.open('GET', URL);
xhr.send();

xhr.onreadystatechange = () => {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    if (xhr.status === 200) {
      const nytResponse = JSON.parse(xhr.responseText).response.docs;
      const docBody = document.querySelector('body');
      let articles = document.querySelector('.wrapper');

      for (let i = 0; i < nytResponse.length; i++) {
        let newArticle = document.createElement('article');
        articles.appendChild(newArticle);

        let newArticleHeadline = document.createElement('h1');
        newArticle.innerText = nytResponse[i].headline.main;
        newArticle.appendChild(newArticleHeadline);

        let newArticleText = document.createElement('h2');
        newArticleText.innerText = nytResponse[i].snippet;
        newArticle.appendChild(newArticleText);

        let date = document.createElement('p');
        date.innerText = nytResponse[i].pub_date;
        newArticle.appendChild(date);
      }

      //create link
    }
  }
}

