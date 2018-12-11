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
        let newArticleHeadline = document.createElement('h1');
        let newArticleText = document.createElement('h2');
        let date = document.createElement('date');
        let aTag = document.createElement('a');

        articles.appendChild(newArticle);
        newArticle.appendChild(newArticleHeadline);
        newArticle.appendChild(newArticleText);
        newArticle.appendChild(date);
        
        aTag.setAttribute('href', nytResponse[i].web_url);
        aTag.innerText = nytResponse[i].headline.main;

        newArticleHeadline.appendChild(aTag);

        newArticleText.innerText = nytResponse[i].snippet;
        
        if (typeof nytResponse[i].pub_date !== 'undefined') {
          date.innerText = nytResponse[i].pub_date.slice(0, 10);
        } else {
          date.innerText = nytResponse[i].pub_date;
          //date undefined.
        }
      }
    }
  }
}

