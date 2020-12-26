const video = document.querySelector('.video');
const speedControll = document.querySelector('.speed_line');
const controller = document.querySelector('.thumb');
const min = 0.5;
const max = 3.5;

function onChooseSpeed(event) {
    const Y = event.pageY - this.offsetTop;
    const perc = Y / this.offsetHeight;
    if (perc > 1) {
        perc = 1;
    };
    
    const itemHeight = `${Math.round(perc * 100)}%`;
    controller.style.height = itemHeight;
    const playbackRate = perc * (max - min) + min;
    controller.innerHTML = `${playbackRate.toFixed(1)} x`;
}

function setSpeed(event) {
    const Y = event.pageY - this.offsetTop;
    const perc = Y / this.offsetHeight;   
    const playbackRate = perc * (max - min) + min;
    video.playbackRate = playbackRate;
}

function getCurrentSpeed(e) {
    const currentSpeed = video.playbackRate;
    const perc = (currentSpeed - min) / (max - min);
    const itemHeight = Math.round(perc * 100) + '%';
    controller.style.height = itemHeight;
    controller.innerHTML = currentSpeed.toFixed(1) + ' x';
}

speedControll.addEventListener('mousemove', onChooseSpeed);
speedControll.addEventListener('mousedown', setSpeed);
speedControll.addEventListener('mouseout', getCurrentSpeed);
