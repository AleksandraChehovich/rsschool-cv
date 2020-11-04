const buttons = document.querySelectorAll('.button');

const playSound = (e) => {
    const btn = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('play');
}

const removeClass = (e) => {
    if (e.propertyName !== 'transform') return; 
    e.target.classList.remove('play');
}

const playByClick = (e) => {
    const btn = e.target;
    const key = btn.id;
    const audio = document.querySelector(`audio[data-key="${key}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    btn.classList.add('play');
}

buttons.forEach(button => button.addEventListener('click', playByClick));

buttons.forEach(button => button.addEventListener('transitionend', removeClass));

window.addEventListener('keydown', playSound);

