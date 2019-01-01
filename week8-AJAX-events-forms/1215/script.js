'use strict'

window.onload = function () {
  /* Catch the elements */
  const feed = document.querySelector('.feed');
  const apiUrl = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=e1584a15933e40f0b87d8d377fadf2ce';

  /* Set the AJAX */
  const sendHttpRequest = (url, method, callback) => { //
    const xmlRequest = new XMLHttpRequest(); //hmlhttprequest class
    xmlRequest.open(method, url); //1. phase 
    xmlRequest.onload = () => { //ha bet0lt0tt
      if (xmlRequest.status === 200) { //es jol t0lt0tt be, akkor
        callback(JSON.parse(xmlRequest.responseText)); //jojjon a function amit meg`runk es vissyah`vunk.
      }
    }
    xmlRequest.send(); //
  }

  //ha undefined a data, nem tud lefutni
  sendHttpRequest(apiUrl, 'GET', (response) => {
    let data = response.results; //objectet kapok vissza amin belul a result-ok mar egy array
    // console.log(data);
    listPosts(data);
  })

  /* Functions */
  const listPosts = (data) => { //data = response.result
    data.forEach(element => {
      if (element.section === "Science" && element.item_type === "Article") {
        console.log(element);

        const post = document.createElement('div');

        const article = document.createElement('article');
        // arrows up & downvote
        const upvote = document.createElement('img');
        upvote.classList.add('upvote');
        upvote.setAttribute('src', "upvote.png");
        
        const voteNumber = document.createElement('p');
        voteNumber.classList.add('voteNumber');
        voteNumber.innerText = `${Math.floor((Math.random() * 200) + 1)}`
        
        const downvote = document.createElement('img');
        downvote.classList.add('downvote');
        downvote.setAttribute('src', "downvote.png");
        
        const votes = document.createElement('div');
        votes.classList.add('votes')
        votes.appendChild(upvote);
        votes.appendChild(voteNumber);
        votes.appendChild(downvote);
        
        const postDiv = document.createElement('div');
        /** */
        post.classList.add('post');
        
        const title = document.createElement('h2');
        title.classList.add('postTitle');
        title.textContent = `${element.title}`;
        const articleLink = document.createElement('a');
        articleLink.setAttribute('href', 'element.url')
        articleLink.appendChild(title);
        postDiv.appendChild(articleLink);
        
        const abstract = document.createElement('h3');
        abstract.textContent = `${element.abstract}`;
        postDiv.appendChild(abstract);
        
        const date = document.createElement('date');
        date.textContent = `${element.created_date}`;
        // date.textContent = `${element.created_date.slice(0, 10)}`;
        postDiv.appendChild(date);
        
        // //remove + modify links
        const actions = document.createElement('div');
        
        const removePost = document.createElement('a');
        removePost.setAttribute('href', '#');
        removePost.textContent = "remove post"
        actions.appendChild(removePost);
        
        const modify = document.createElement('a');
        modify.setAttribute('href', '#');
        modify.textContent = "modify post";
        actions.appendChild(modify);

        postDiv.appendChild(actions);
        
        post.appendChild(votes);
        post.appendChild(article);
        feed.appendChild(post);
        article.appendChild(postDiv);
      }
    });
  }
}
