const playingField = document.querySelector('.game');
const numberField = document.querySelector('.calc_item__num');
const display = document.querySelector('.calc_input');
const scorePanel = document.querySelector('.score_value');
const startBtn = document.querySelector('.cover_start');
const howToPlayBtn = document.querySelector('.cover_how-to-play');
const cover = document.querySelector('.cover');
const cloud = document.querySelector('.cloud');
const mute = document.querySelector('.mute');
const bestScoreTabble = document.querySelector('.best-score-num');
const fullScreenBtn = document.querySelector('.fullscreen');
const backgroundMusic = new Audio();
const operations = ['+', '-', '*', '/'];

let enteredResult;
let autoTimer;
let wavesInitialHeight = 200;
let looseCount = 0;
let rangeOfNumbers = 10;
let numberOfPoints = 10;
let correctAnswersCount = 0;
let creatingNewDropsIntervalNumber = 4000;
let fallingIntervalNumber = 500;
let resultsArray = [];
let dropsArray = [];
let launcheDropTimer;
let fullScreenFlag = false;
let automaticFlag = false;
let doubleDrop = false;
let allDropsCount = 0;
let randomBonusDropNumber = 3;
let randomDoubleDropNumber = 6;

let score = 0;
let additionCount = 0;
let totallAdditionCount = 0;
let substractionCount = 0;
let totallSubstractionCount = 0;
let multiplicationCount = 0;
let totallMultiplicationCount = 0;
let divisionCount = 0;
let totallDivisionCount = 0;
let savedScore = 0;

let randomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
};

let randomOperation = (arr) => {
    return arr[Math.round(Math.random() * (arr.length - 1))];
};

let getRandomBonusDropNumber = () => {
    allDropsCount % 4 === 0 ? randomBonusDropNumber = randomNumber(allDropsCount + 1, allDropsCount + 4) :
                               randomBonusDropNumber;
};

let getRandomDoubleDropNumber = () => {
    allDropsCount % 8 === 0 ? randomDoubleDropNumber = randomNumber(allDropsCount + 1, allDropsCount + 8) :
                              randomDoubleDropNumber;
};

let creatingNewDropsInterval = () => {
    if (correctAnswersCount < 3) {
        creatingNewDropsIntervalNumber;
        rangeOfNumbers;
    } if (correctAnswersCount > 3 && correctAnswersCount < 6) {
        creatingNewDropsIntervalNumber = 3000;
        rangeOfNumbers = 15;
    } else if (correctAnswersCount >= 6 && correctAnswersCount < 12) {
        creatingNewDropsIntervalNumber = 2500;
        rangeOfNumbers = 25;
     } else if (correctAnswersCount >= 12) {
        creatingNewDropsIntervalNumber = 2000;
        rangeOfNumbers = 40;
     };
};

// function changeFallingDurationTime(num) {
//     dropsArray.forEach(drop => drop.style.animationDuration = num + 's');
// }

// setTimeout(changeFallingDurationTime(2), 5000);

const setBestScore = () => {
    savedScore = score;
    if (+localStorage.getItem('bestScore') < savedScore) {
        localStorage.setItem('bestScore', savedScore);
    };
};

const getBestScore = () => {
    localStorage.getItem('bestScore') === null ? bestScoreTabble.textContent = 0 :
                                                 bestScoreTabble.textContent = localStorage.getItem('bestScore');
};

function getResult(operand1, strOperator, operand2) {
    if (strOperator === '+') {
        return operand1 + operand2;
    } else if (strOperator === '-') {
        return operand1 - operand2;
    } else if (strOperator === '*') {
        return operand1 * operand2;
    } else if (strOperator === '/') {
        return operand1 / operand2;
    };
};

function createDrop() {
 
    let strOperator = randomOperation(operations);
    let operand1 = randomNumber(0, rangeOfNumbers);
    let operand2 = randomNumber(1, rangeOfNumbers);
    allDropsCount++;

    if (strOperator === '-') {
        if (operand1 < operand2) {
            operand1 = randomNumber(operand2, rangeOfNumbers);
        };
    };

    if (strOperator === '/') {
        if (operand1 % operand2 !== 0) {
            operand1 = operand1 + (operand2 - operand1 % operand2);
        };
    };

    let drop = document.createElement('div');
    drop.classList.add('drop');
    drop.style.left = `${randomNumber(0, 85)}%`;
    drop.textContent = `${operand1} ${strOperator} ${operand2}`;

    let currentResult = getResult(operand1, strOperator, operand2);

    drop.getCurResult = {
        result: currentResult,
        operator: strOperator
    };

    resultsArray.push(currentResult);
    dropsArray.push(drop);
    getRandomBonusDropNumber();
    getRandomDoubleDropNumber();
    checkIfBonusDrop(drop);
    checkIfDoubleDrop(drop);

    playingField.prepend(drop);

    drop.addEventListener('animationend', missingDrop);   
};

function checkIfBonusDrop(d) {
    if (allDropsCount === randomBonusDropNumber) {
        d.classList.add('bonus');
    };
};

function checkIfDoubleDrop(d) {
    if (allDropsCount === randomDoubleDropNumber) {
        d.classList.add('double');
    };
};

function updateScore() {
    if (doubleDrop) {
        score = score * 2;
    } else {
        score += numberOfPoints;
    };
    
    scorePanel.textContent = score;
    numberOfPoints++;
    doubleDrop = false;
};

function getOperatorsStatistic(d) {
    if (d.getCurResult.operator === '+') {
        additionCount++;
    } else if (d.getCurResult.operator === '-') {
        substractionCount++;
    } else if (d.getCurResult.operator === '*') {
        multiplicationCount++;
    } else if (d.getCurResult.operator === '/') {
        additionCount++;
    };
};

function compareResults() {
    let index = resultsArray.indexOf(+enteredResult);
    if (index !== -1) {
        resultsArray.splice(index, 1);

        getOperatorsStatistic(dropsArray[index]);

        dropsArray[index].classList.add('delete');

        if (dropsArray[index].classList.contains('bonus')) {
            setTimeout(function() {
                dropsArray.forEach(drop => drop.remove());
                dropsArray.splice(0, dropsArray.length);
                resultsArray.splice(0, resultsArray.length);
            }, 800);
        } else {
            if (dropsArray[index].classList.contains('double')) {
                doubleDrop = true;
            }
            setTimeout(function() {
                dropsArray[index].remove();
                dropsArray.splice(index, 1);
            }, 800);
        };

        updateScore();
        correctAnswersCount++;
        playWinSound();
        creatingNewDropsInterval();
    };
};

function missingDrop(d) {
    const waves = document.querySelector('.waves');
    let res = this.getCurResult.result;

        playLooseSound();
        this.remove();

        removeResultsFromArrays(res);

        this.removeEventListener('animationend', missingDrop);
        waves.style.height = (waves.clientHeight + 50) + 'px';
        looseCount++;     

        stopGame();
};


const onStartGame = () => {
    
    playBackgroundMusic();
    updateCounts();
    scorePanel.textContent = score;    

    cover.style.display = 'none';
    
    launcheDropTimer = setTimeout(function droping() { 
        createDrop();
        launcheDropTimer = setTimeout(droping, creatingNewDropsIntervalNumber);
    }, creatingNewDropsIntervalNumber);
};

function stopGame() {

    if (looseCount >= 3) {
       clearTimeout(launcheDropTimer);

       if (!automaticFlag) {
            if (savedScore < score) {
                setBestScore();
            };
            getBestScore();
            updateTotallResults();
       }

       returnToInitialValues();
 
        returnCoverPage();
        getCurrentResults()
        
        numberOfPoints = 10;
        score = 0;
    };
};

function returnCoverPage() {
    const statistic = document.querySelector('.statistic_wrapper');
    const currentScoreContent = document.querySelector('.cur-score-num');

    cover.style.display = 'flex';
    statistic.style.display = 'block';
    currentScoreContent.textContent = score;
    if(automaticFlag) {
        clearTimeout(autoTimer);
        automaticFlag = false;
    }; 
};

function getCurrentResults() {
    const addition = document.querySelector('.addition_cur');
    const substraction = document.querySelector('.subtraction_cur');
    const multiplication = document.querySelector('.multiplication_cur');
    const division = document.querySelector('.division_cur');

    addition.textContent = additionCount;
    substraction.textContent = substractionCount;
    multiplication.textContent = multiplicationCount;
    division.textContent = divisionCount;
};

function updateTotallResults() {
    const totallAdditionCountTabble = document.querySelector('.addition_all');
    const totallSubstractionCountTabble = document.querySelector('.subtraction_all');
    const totallMultiplicationCountTabble = document.querySelector('.multiplication_all');
    const totallDivisionCountTabble = document.querySelector('.division_all');

    totallAdditionCount += additionCount;
    totallSubstractionCount += substractionCount;
    totallMultiplicationCount += multiplicationCount;
    totallDivisionCount += divisionCount;

    let resultObject = {
        'totallAdditionCount': additionCount,
        'totallSubstractionCount': substractionCount,
        'totallMultiplicationCount': multiplicationCount,
        'totallDivisionCount': divisionCount
    };

    setTotallResults(resultObject);

    totallAdditionCountTabble.textContent = +localStorage.getItem(`totallAdditionCount`);
    totallSubstractionCountTabble.textContent = +localStorage.getItem(`totallSubstractionCount`);
    totallMultiplicationCountTabble.textContent = +localStorage.getItem(`totallMultiplicationCount`);
    totallDivisionCountTabble.textContent = +localStorage.getItem(`totallDivisionCount`);
};

function setTotallResults(obj) {
    for (let key in obj) {
        if (localStorage.getItem(key) === null) {
            localStorage.setItem(key, obj[key]);
        } else {
            let totallRes = +localStorage.getItem(key) + obj[key];
            localStorage.setItem(key, totallRes);
        };    
    };
};

function updateCounts() {
    additionCount = 0;
    substractionCount = 0;
    multiplicationCount = 0;
    divisionCount = 0;
    looseCount = 0;
};

function removeResultsFromArrays(res) {
    let index = resultsArray.indexOf(res);

    if (index !== -1) {
        resultsArray.splice(index, 1);
        dropsArray.splice(index, 1);
    };
};

function enterNumber(btn) {
    if (!btn) return null;
    if (display.value === '0') {
        display.value = '';
    };
    display.value += btn.dataset.value;
};

function enterOperation(btn) {
    if (btn.dataset.operation === 'Enter') {
        enterResult(btn);
    } else if (btn.dataset.operation === 'Delete') {
        deleteNum(btn);
    } else if (btn.dataset.operation === 'Backspace') {
        clearDisplay();
    };
};

function enterResult(btn) {
        enteredResult = display.value;
        clearDisplay();
        compareResults();
};

function autoEnterResult() {
    enteredResult = display.value;
    setTimeout(clearDisplay(), 1500);
    compareResults();
};

function deleteNum(btn) {
    display.value = display.value.slice(0, display.value.length - 1);
};

function clearDisplay() {
    display.value = '';
};

const onKeyboardPressNum = (event) => {
    const btn = document.querySelector(`button[data-value='${event.key}']`);

    if (btn) {
        enterNumber(btn);
    };  
};

const onKeyboardPressOp = (event) => {
    const btn = document.querySelector(`button[data-operation='${event.key}']`);

    if(btn) {
        enterOperation(btn);
    };  
};

function returnToInitialValues() {
    const waves = document.querySelector('.waves');

    dropsArray.forEach(drop => drop.remove());
    dropsArray.splice(0, dropsArray.length);
    resultsArray.splice(0, resultsArray.length);
    waves.style.height = wavesInitialHeight + 'px';
    creatingNewDropsIntervalNumber = 5000;
    correctAnswersCount = 0;
    rangeOfNumbers = 10;
    allDropsCount = 0;
};

function playWinSound() {
    let winSound = new Audio();
    winSound.src = './sounds/win.mp3';
    winSound.play();
};

function playLooseSound() {
    let looseSound = new Audio();
    looseSound.src = './sounds/loose.mp3';
    looseSound.play();
};

const playBackgroundMusic = () => {
    backgroundMusic.src = './sounds/zvuki_zhivoj_prirodi_-_more_i_chajki_(zf.fm).mp3';
    backgroundMusic.play();
};

function onSwitchSound() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        this.src = './svg/mute.svg';
    } else {
        backgroundMusic.pause();
        this.src = './svg/mute1.svg';
    };
};

function fullScreen(element) {
    if(element.requestFullscreen) {
      element.requestFullscreen();
    } else if(element.webkitrequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if(element.mozRequestFullscreen) {
      element.mozRequestFullScreen();
    };
};

function cancelfullScreen() {
    if(document.exitFullscreen) {
    document.exitFullscreen();
    } else if(document.webkitRequestFullscreen ) {
    document.webkitRequestFullscreen();
    } else if(document.mozRequestFullscreen) {
    document.mozRequestFullScreen();
    };
};

function onOpenFullScreen() {
    const  wrapper = document.querySelector('.wrapper');
    const largeBtns = document.querySelectorAll('.calc_button__l');

    if(!fullScreenFlag) {
        fullScreen(wrapper);
        this.src = './svg/fullscreen.svg';
        largeBtns.forEach(btn => btn.style.width = '146%');
        fullScreenFlag = true;
    } else {
        cancelfullScreen();
        this.src = './svg/fullscreen1.svg';
        largeBtns.forEach(btn => btn.style.width = '100%');
        fullScreenFlag = false;
    };
};

const onChangeCloudPosition = () => {
    cloud.style.top = `${randomNumber(0, 50)}%`;
    cloud.style.width = `${randomNumber(15, 45)}%`;
};

numberField.onclick = function(event) {
    event.target.getAttribute('data-value') ? enterNumber(event.target) : 
                                              enterOperation(event.target);
};

function onPlayAutomatic() {

    automaticFlag = true;
    onStartGame();

    autoTimer = setTimeout(function auto() {
        let resultValue = resultsArray[randomNumber(0, resultsArray.length - 1)];
   
            display.value = resultValue;
            let autoTimerRes = setTimeout(autoEnterResult, 1000);

            autoTimer = setTimeout(auto, 6000);
    }, 4000);
};

mute.addEventListener('click', onSwitchSound);
fullScreenBtn.addEventListener('click', onOpenFullScreen);

window.addEventListener('keypress', onKeyboardPressNum);
window.addEventListener('keydown', onKeyboardPressOp);

startBtn.addEventListener('click', onStartGame);
howToPlayBtn.addEventListener('click', onPlayAutomatic);

for (let i = 0; i < dropsArray.length; i++) {
    dropsArray[i].addEventListener('animationstart', missingDrop);
};

cloud.addEventListener('animationiteration', onChangeCloudPosition);
