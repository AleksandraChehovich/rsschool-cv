const name = document.querySelector('.hello_name');
const plans = document.querySelector('.plans');



const setBackgroundImg = () => {
    let now = new Date ();
    let hour = now.getHours();
    if (hour >= 12 && hour < 18) {
        document.querySelector('.wrapper').classList.add('day');
    } else if (hour >= 18 && hour < 23) {
        document.querySelector('.wrapper').classList.add('evening');
    } else if (hour >= 23 && hour <= 4) {
        document.querySelector('.wrapper').classList.add('night');
    } else if (hour > 4 && hour < 12) {
        document.querySelector('.wrapper').classList.add('morning');
    };
}

const addFirstZero = (num) => num.toString().padStart(2, '0');

const setCurrentTime = () => {
    let now = new Date ();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let sec = now.getSeconds();
    let curTime = document.querySelector(".current_time");
    curTime.innerHTML = `${addFirstZero(hour)} : ${addFirstZero(minutes)} : ${addFirstZero(sec)}`;

    setTimeout(setCurrentTime, 1000);  
}

const getDay = (number) => {
    const days = ['Sanday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[number];
}

const setCurrentDate = () => {
    let now = new Date ();
    let year = now.getFullYear();
    let day = now.getDay();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    let curDate = document.querySelector('.current_date');
    curDate.innerHTML = `${date}, ${month}, ${year} ${getDay(day)}`;
}

const setUserName = (event) => {
    if (event.type === 'keypress') {
        if (event.keyCode == 13) {
            localStorage.setItem('name', event.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText);
        
    };
}

const getUserName = () => {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter your name]';
    } else name.textContent = localStorage.getItem('name');
}

const setUserPlans = (event) => {
    if (event.type === 'keypress') {
        if (event.keyCode == 13) {
            localStorage.setItem('plans', event.target.innerText);
            plans.blur();
        }
    } else {
        localStorage.setItem('plans', event.target.innerText);
    };
}

const getUserPlans = () => {
    if (localStorage.getItem('plans') === null) {
        plans.textContent = '[Enter your plans]';
    } else plans.textContent = localStorage.getItem('plans');
}

name.addEventListener('keypress', setUserName);
name.addEventListener('blur', setUserName);
plans.addEventListener('keypress', setUserPlans);
plans.addEventListener('blur', setUserPlans);

setBackgroundImg();
setCurrentTime();
setCurrentDate();
getUserName();
getUserPlans();
