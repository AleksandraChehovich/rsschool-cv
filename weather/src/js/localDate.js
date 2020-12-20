const WeekDaysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const WeekDaysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentCountryCode;
let currentTimezone;

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

function getNextDay(dayNumber) {
    const futureDays = document.querySelectorAll('.next-day_text');
    let daysArray;

    daysArray = +localStorage.getItem('language') ? WeekDaysRu : WeekDaysEn;

    for (let i = 0; i < futureDays.length; i++) {
        dayNumber++;
        if (dayNumber === 7) {
            dayNumber = 0;
        }
        
        futureDays[i].textContent = daysArray[dayNumber];
    };
};

export function getCurrentTime(country_code, timezone) {
    const time = document.querySelector('.time');
    currentCountryCode = country_code || currentCountryCode;
    currentTimezone = timezone || currentTimezone;

    let optionsForTime = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: currentTimezone
    };

    let now = new Date();

    time.textContent = now.toLocaleString(currentCountryCode, optionsForTime);

    setTimeout((currentCountryCode, currentTimezone) => {
        getCurrentTime();
    }, 1000, currentCountryCode, currentTimezone);
};
