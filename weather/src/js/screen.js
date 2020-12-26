const fullscreenButton = document.querySelector('.fullscreen');
let isFullscreen = false;

function fullScreen(element) {
  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.webkitrequestFullscreen) {
    element.webkitRequestFullscreen();
  } else if (element.mozRequestFullscreen) {
    element.mozRequestFullScreen();
  }
}

function cancelfullScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.webkitRequestFullscreen) {
    document.webkitRequestFullscreen();
  } else if (document.mozRequestFullscreen) {
    document.mozRequestFullScreen();
  }
}

function onOpenFullScreen() {
  const buttonImg = fullscreenButton.querySelector('img');
  const screen = document.querySelector('.container');

  if (!isFullscreen) {
    fullScreen(screen);
    buttonImg.src = './fullscreenClose.svg';
    isFullscreen = true;
  } else {
    cancelfullScreen();
    buttonImg.src = './fullscreen.svg';
    isFullscreen = false;
  }
}

fullscreenButton.addEventListener('click', onOpenFullScreen);
