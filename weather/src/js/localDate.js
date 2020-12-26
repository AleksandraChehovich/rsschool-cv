const WeekDaysRu = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
const WeekDaysEn = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let currentCountryCode;
let currentTimezone;

function getCurrentLanguage() {
  return +localStorage.getItem('language') ? 'ru-RU' : 'en-En';
}

function getNextDay(dayNumber) {
  const futureDays = document.querySelectorAll('.next-day_text');

  const daysArray = +localStorage.getItem('language') ? WeekDaysRu : WeekDaysEn;

  for (let i = 0; i < futureDays.length; i += 1) {
    dayNumber += 1;
    if (dayNumber === 7) {
      dayNumber = 0;
    }

    futureDays[i].textContent = daysArray[dayNumber];
  }
}

export function getCurrentDate(code) {
  const weekday = document.querySelector('.date_weekday');
  const date = document.querySelector('.date_day');
  if (code === 'US') {
    code = 'en-GB';
  }

  const optionsForDate = {
    year: '2-digit',
    month: 'numeric',
    day: 'numeric',
  };

  const optionsForDay = {
    weekday: 'short',
  };

  const now = new Date();

  weekday.textContent = now.toLocaleString(code, optionsForDate);
  date.textContent = now.toLocaleString(`${getCurrentLanguage()}`, optionsForDay);

  getNextDay(now.getDay());
}

export function getCurrentTime(countryCode, timezone) {
  const time = document.querySelector('.time');
  currentCountryCode = countryCode || currentCountryCode;
  currentTimezone = timezone || currentTimezone;

  const optionsForTime = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: currentTimezone,
  };

  const now = new Date();

  time.textContent = now.toLocaleString(currentCountryCode, optionsForTime);

  setTimeout(() => {
    getCurrentTime();
  }, 1000, currentCountryCode, currentTimezone);
}
