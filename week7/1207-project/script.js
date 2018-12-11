'use strict'

const pictures = [
  {
    'title': 'picture1',
    'url': 'http://getwallpapers.com/wallpaper/full/b/e/5/645666.jpg',
    'description': 'description1'
  },
  {
    'title': 'picture1',
    'url': 'http://getwallpapers.com/wallpaper/full/b/e/5/645666.jpg',
    'description': 'description1'
  },
  {
    'title': 'cica',
    'url': 'https://wallpapersultra.net/wp-content/uploads/Cool-Phone-Wallpapers-Pictures.jpg',
    'description': 'description1'
  },
  {
    'title': 'picture1', 'url':
      'https://a.travel-assets.com/findyours-php/viewfinder/images/res60/109000/109481-St-Augustine-Lighthouse-And-Museum.jpg',
    'description': 'description1'
  },
  {
    'title': 'real life nebula', 'url': 'https://s4827.pcdn.co/wp-content/uploads/2017/10/federico-beccari-67272_Mac.jpg',
    'description': 'description1'
  },
  {
    'title': 'picture1',
    'url': 'https://a.travel-assets.com/findyours-php/viewfinder/images/res60/109000/109481-St-Augustine-Lighthouse-And-Museum.jpg',
    'description': 'description1'
  },
  { 'title': 'cica', 'url': 'https://wallpapersultra.net/wp-content/uploads/Cool-Phone-Wallpapers-Pictures.jpg', 'description': 'description1' },

];

const mainImageCont = document.querySelector('.display');
const mainImg = document.createElement('img');
mainImg.setAttribute('src', pictures[0].url);
mainImageCont.appendChild(mainImg);

const thumbnailsContainer = document.querySelector('.thumbnail');
for (let i = 0; i < pictures.length; i++) {
  const thumbImg = document.createElement('img');
  thumbImg.src = pictures[i].url;
  thumbnailsContainer.appendChild(thumbImg);
}
