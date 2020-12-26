const holes = document.querySelectorAll('.hole');
const score = document.querySelector('.score_curr');
const swimmers = document.querySelectorAll('.hole_img');
const startBtn = document.querySelector('.start');
const bestScore = document.querySelector('.best_score');
let currScore = 0;
let timeUp = false;
let savedScore = 0;
let lastSlapedDiver;
let lastHole;

randomNum = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

function randomHole(arr) {
   
    let num = Math.round(Math.random() * (arr.length - 1));
    let hole = arr[num];
    
    if (hole === lastHole) {
       return randomHole(arr);
    } 
    lastHole = hole;
    return hole; 
}

function emerge() {
    const time = randomNum(900, 1400);
    const hole = randomHole(holes);
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!timeUp) emerge();
    }, time);
}

function startGame() {
    score.textContent = 0;
    timeUp = false;
    this.disabled = true;
    if (savedScore < currScore) {
        savedScore = currScore;
        setBestScore();
    };
    currScore = 0;
    emerge();
    setTimeout(() => {
        timeUp = true;
        this.disabled = false;
    }, 17000);
    getBestScore();
}

const getBestScore = () => {
    if (localStorage.getItem('bs') === null) {
        bestScore.textContent = 0;
    } else bestScore.textContent = localStorage.getItem('bs');
}

const setBestScore = () => {

    if (+localStorage.getItem('bs') < savedScore) {       
        localStorage.setItem('bs', savedScore);
    };
}

function slap(event) {
    if (!event.isTrusted) return;
    if (lastSlapedDiver !== this.dataset.count) {
        currScore ++;
    }

    lastSlapedDiver = this.dataset.count;
 
    this.parentNode.classList.remove('up');
    score.textContent = currScore;
}

startBtn.addEventListener('click', startGame);
swimmers.forEach(swimmer => swimmer.addEventListener('click', slap));


getBestScore();
