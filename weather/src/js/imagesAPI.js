const container = document.querySelector('.container');
const updateBackgroundBtn = document.querySelector('.controlls_background');
const ms = 300 * 1000;

function getLinkToImage() {
  const url = 'https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=nature&client_id=eIT-Ii4B4Amh3yuKBKVJd1M9qhPaJ44yHtuU7LeIrxE';

  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      container.style.backgroundImage = `url(${data.urls.regular})`;
    });
}

getLinkToImage();

setInterval(() => {
  getLinkToImage();
}, ms);

updateBackgroundBtn.addEventListener('click', getLinkToImage);
