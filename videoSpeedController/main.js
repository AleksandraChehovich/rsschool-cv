const video = document.querySelector('.video');
const speedControll = document.querySelector('.speed_line');
const controller = document.querySelector('.thumb');
const min = 0.5;
const max = 3.5;

function chooseSpeed(e) {
    const Y = e.pageY - this.offsetTop;
    const perc = Y / this.offsetHeight;
    const itemHeight = Math.round(perc * 100) + '%';
    controller.style.height = itemHeight;
    const playbackRate = perc * (max - min) + min;
    controller.innerHTML = playbackRate.toFixed(1) + ' x';
}

function setSpeed(e) {
    const Y = e.pageY - this.offsetTop;
    const perc = Y / this.offsetHeight;   
    const playbackRate = perc * (max - min) + min;
    video.playbackRate = playbackRate;
}

// function getCurrentSpeed(e) {
//     const currentSpeed = video.playbackRate;
//     const perc = (currentSpeed - min) / (max - min);
//     const itemHeight = Math.round(perc * 100) + '%';
//     controller.style.height = itemHeight;
//     // console.log(currentSpeed);
//     controller.innerHTML = currentSpeed.toFixed(1) + ' x';

// }

speedControll.addEventListener('mousemove', chooseSpeed);
speedControll.addEventListener('mousedown', setSpeed);
// speedControll.addEventListener('mouseout', getCurrentSpeed);