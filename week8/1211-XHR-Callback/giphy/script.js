let URL = 'https://api.giphy.com/v1/gifs/search?api_key=4J8GNFWQJWN8juUDnveKoSGbyDaKKG78&q=cat&limit=15&offset=0&rating=G&lang=en';

const sendHTTPRequest = (url, method, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = () => {
    if (xhr.status === 200) {
      // http check is done, we can work with the parsed data
      //console.log(JSON.parse(xhr.responseText).data);
      callback(JSON.parse(xhr.responseText).data);
    }
  }
  xhr.send();
}

sendHTTPRequest(URL, 'GET', (response) => {
  console.log(response);
  let navParent = document.querySelector('.wrapper');
  response.forEach(picture => {
    //console.log(picture);
    let newThumbnail = document.createElement('img');
    navParent.appendChild(newThumbnail);
    newThumbnail.setAttribute('src', picture.images['480w_still'].url);
  });
});
