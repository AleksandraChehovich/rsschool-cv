const WeekDaysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const WeekDaysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let c;
let t;

export function getCurrentDate(code) {
    const weekday = document.querySelector('.date_weekday');
    const date = document.querySelector('.date_day');
    code === 'US' ? code = `en-GB` : false;

    let optionsForDate = {
        year: '2-digit',
        month: 'numeric',
        day: 'numeric'
    };

    let optionsForDay = {
        weekday: 'short'
    };

    let now = new Date();

    weekday.textContent = now.toLocaleString(code, optionsForDate);
    date.textContent = now.toLocaleString(`${getCurrentLanguage()}`, optionsForDay);

    getNextDay(now.getDay());
};

function getCurrentLanguage() {
   return +localStorage.getItem('language') ? 'ru-RU' : 'en-En';
}

function getNextDay(d) {
    const futureDays = document.querySelectorAll('.next-day_text');
    let daysArray;

    +localStorage.getItem('language') ? daysArray = WeekDaysRu : daysArray = WeekDaysEn;

    for (let i = 0; i < futureDays.length; i++) {
        d++;
        if (d === 7) {
            d = 0;
        }
        
        futureDays[i].textContent = daysArray[d];
    };
};

export function getCurrentTime(country_code, timezone) {
    const time = document.querySelector('.time');
    c = country_code || c;
    t = timezone || t;

    let optionsForTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: t
    };

    let now = new Date();

    time.textContent = now.toLocaleString(c, optionsForTime);

    setTimeout((c, t) => {
        getCurrentTime();
    }, 1000, c, t);
};
