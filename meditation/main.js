const navBar = document.querySelector('.nav');
const svgToClose = document.querySelector('.close');
const svgToOpen = document.querySelector('.open');
const buttons = document.querySelectorAll('.nav_button');
const button = document.querySelector('.button_svg');
const video = document.querySelector('video');
const track = document.querySelector('.track');
const timerSmall = document.querySelector('.time-input');
let currentDuration = 300;
const timerBtn = document.querySelectorAll('.timer');


const play = (btn) => {
    if (btn.classList.contains('active')) {
        video.pause();
        track.pause();
        btn.classList.remove('active');
        btn.children[0].src = './svg/play.svg';
    } else {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.remove('active');
            buttons[i].children[0].src = './svg/play.svg';
        }
        video.play();
        track.play();
        btn.classList.add('active');
        btn.children[0].src = './svg/stop.svg';
    }
}


for (let i = 0; i < buttons.length; i++) {  
    buttons[i].addEventListener('click', function (e) {         
        track.src = this.getAttribute('data-sound');
        video.src = this.getAttribute('data-video');
        play(e.currentTarget);
    });
}

track.ontimeupdate = function() {
    let currentTime = track.currentTime;
    let residual = currentDuration - currentTime;
    let min = Math.floor(residual / 60);
    let sec = Math.floor(residual % 60);
    if (sec < 10) {
        sec = `0${sec}`;
    }
    timerSmall.textContent = `${min}:${sec}`;
    if (currentTime > currentDuration) {
        track.pause();
        video.pause();
        track.currentTime = 0;
    }
}

for (let i = 0; i < timerBtn.length; i++) {
    timerBtn[i].addEventListener('click', (e) => {
       let currentBtn = e.target;
        currentDuration = e.currentTarget.getAttribute('data-time');
        if (currentDuration === 'Infinity') {
            timerSmall.textContent = 'infinity';
        } else {
            timerSmall.textContent = `${Math.floor(currentDuration / 60)}:${Math.floor(currentDuration % 60)}`;
        }
    })
}

svgToClose.addEventListener('click', () => {
    navBar.style.left = '-200px';
    svgToClose.style.display = 'none';
    svgToOpen.style.display = 'block';
    svgToOpen.style.top = '45%';
});

svgToOpen.addEventListener('click', ()=> {
    navBar.style.left = '0';
    svgToClose.style.display = 'block';
    svgToOpen.style.display = 'none';
});
