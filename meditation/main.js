const navBar = document.querySelector('.nav');
const svgToClose = document.querySelector('.close');
const svgToOpen = document.querySelector('.open');
const buttons = document.querySelectorAll('.nav_button');
const button = document.querySelector('.button_svg');
const video = document.querySelector('video');
const track = document.querySelector('.track');
const timerSmall = document.querySelector('.time-input');
const navigation = document.querySelector('.nav_menu');
const timerBtn = document.querySelectorAll('.timer');
let currentDuration = 300;

const play = (btn) => {
    if (btn.classList.contains('active')) {
        pauseMedia();
        btn.classList.remove('active');
        btn.children[0].src = './svg/play.svg';
    } else {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
            buttons[i].children[0].src = './svg/play.svg';
        }
        playMedia()
        btn.classList.add('active');
        btn.children[0].src = './svg/stop.svg';
    }
}

const playMedia = () => {
    video.play();
    track.play();
}

const pauseMedia = () => {
    video.pause();
    track.pause();
}

const openMenu = () => {
    navBar.style.left = '0';
    svgToClose.style.display = 'block';
    svgToOpen.style.display = 'none';
}

const closeMenu = () => {
    navBar.style.left = '-200px';
    svgToClose.style.display = 'none';
    svgToOpen.style.display = 'block';
    svgToOpen.style.top = '45%';
}

const addFirstZero = (num) => num.toString().padStart(2, '0');


track.ontimeupdate = function() {
    let currentTime = track.currentTime;
    let residual = currentDuration - currentTime;
    let min = Math.floor(residual / 60);
    let sec = Math.floor(residual % 60);
    timerSmall.textContent = `${addFirstZero(min)}:${addFirstZero(sec)}`;
    if (currentTime > currentDuration) {
        pauseMedia();
        track.currentTime = 0;
    }
}

const setTimer = () => {
    let startTime = timerBtn.getAttribute('data-time');
    let  minStart = Math.floor(startTime / 60);
    let secStart = Math.floor(startTime % 60);
        
}

navigation.onclick = function (event) {
    let currentButton = event.target;
    if (currentButton.classList.contains('timer')) {
        currentDuration = currentButton.getAttribute('data-time');
        timerSmall.textContent = `${addFirstZero(Math.floor(currentDuration / 60))}:${addFirstZero(Math.floor(currentDuration % 60))}`;  
    } else if (currentButton.classList.contains('navigation')) {
        if (currentButton.tagName === 'BUTTON') {
            currentButton = currentButton;
        } else currentButton = currentButton.closest('button');
        track.src = currentButton.getAttribute('data-sound');
        video.src = currentButton.getAttribute('data-video');
        play(currentButton);
    } else return  null;
}

svgToClose.addEventListener('click', closeMenu);

svgToOpen.addEventListener('click', openMenu);
