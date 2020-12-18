import { getCurrentDate, getCurrentTime } from './localDate';
import { getErrorMessage } from './PopUpError';
import { transliterate, isCyrillic } from './translit';
import { getIcons } from './icons';

const switchTempButtons = document.querySelector('.controlls_degrees');
const switchLangButtons = document.querySelector('.controlls_language');
const searchBtn = document.querySelector('.search-form_button');
const form = document.querySelector('.search-form_input');

export let language = 'en';
export let isCels = 1;
let measures = 'M';
let isRuLanguage = 0;
let cityName = 'Minsk';

function onEnterCityName() {
    const searchInput = document.querySelector('.search-form_input');

    cityName = searchInput.value;
    if (language === 'ru')  {
        if(!isCyrillic(cityName)) {
            cityName = transliterate(cityName, true);
        }
    } else {
        if(isCyrillic(cityName)) {
            cityName = transliterate(cityName);
        }
    }
    getCurrentValues();
    searchInput.value = '';
};

function changeToRu() {
    const searchBtn = document.querySelector('.search-form_button');
    const feelings = document.querySelector('.feels_text');
    const wind = document.querySelector('.wind_text');
    const humidityCtx = document.querySelector('.humidity_text');
    const lat = document.querySelector('.latitude_ctx');
    const lng = document.querySelector('.longitude_ctx');
    language = 'ru';

    cityName = transliterate(cityName, true);

    searchBtn.textContent = 'Поиск';
    feelings.textContent = 'Ощущается как:';
    wind.textContent = 'Ветер:';
    humidityCtx.textContent = 'Влажность:';
    lat.textContent = 'Широта:';
    lng.textContent = 'Долгота:';
};

function changeToEn() {
    const searchBtn = document.querySelector('.search-form_button');
    const feelings = document.querySelector('.feels_text');
    const wind = document.querySelector('.wind_text');
    const humidityCtx = document.querySelector('.humidity_text');
    const lat = document.querySelector('.latitude_ctx');
    const lng = document.querySelector('.longitude_ctx');
    language = 'en';

    cityName = transliterate(cityName);

    searchBtn.textContent = 'Search';
    feelings.textContent = 'Feel like:';
    wind.textContent = 'Wind:';
    humidityCtx.textContent = 'Humidity:';
    lat.textContent = 'Latitude:';
    lng.textContent = 'Longitude:';
};

export function getCurrentValues() {
    const currentDayTemperature = document.querySelector('.current');
    const firstDayTemperature = document.querySelector('.first');
    const secondDayTemperature = document.querySelector('.second');
    const thirdDayTemperature = document.querySelector('.third');
    const humidity = document.querySelector('.humidity_value');
    const windSpd = document.querySelector('.wind_value');
    const feelingTemp = document.querySelector('.feels_temperature__num');
    const weatherDesc = document.querySelector('.data_temperature-icon__context');
    const city = document.querySelector('.data_location');

    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&days=4&units=${measures}&lang=${language}&key=7598a76e99de44c2b7e89e8205dcfa43`;

    fetch(url)
        .then(result => result.json())
        .then(data => {
            const { lon, lat, country_code, timezone } = data;
            let currentDate = data.data[1].datetime;
            console.log(data);

            currentDayTemperature.textContent = Math.round(data.data[0].high_temp);
            firstDayTemperature.textContent = Math.round(data.data[1].high_temp);
            secondDayTemperature.textContent = Math.round(data.data[2].high_temp);
            thirdDayTemperature.textContent = Math.round(data.data[3].high_temp);
            humidity.textContent = `${data.data[0].rh} %`;
            windSpd.textContent = `${Math.round(data.data[0].wind_spd)} ${!isRuLanguage ? `m/s` : `м/с`}`;
            weatherDesc.textContent = `${data.data[0].weather.description}`;
            feelingTemp.textContent = Math.round(data.data[0].temp);
            city.textContent = data.city_name;
            
            getSearchingLocation(lat, lon);
            getCurrentDate(country_code);
            getCurrentTime(country_code, timezone);

            getIcons(data);
        })
        .catch(error => {getErrorMessage()});
};

function getSearchingLocation(lat, lon) {
    const latitude = document.querySelector('.latitude');
    const longitude = document.querySelector('.longitude');

    latitude.innerHTML = `${lat.slice(0, lat.indexOf('.'))}<sup>o</sup>${lat.slice(lat.indexOf('.') + 1, lat.indexOf('.') + 3)}'`;
    longitude.innerHTML = `${lon.slice(0, lon.indexOf('.'))}<sup>o</sup>${lon.slice(lon.indexOf('.') + 1, lon.indexOf('.') + 3)}'`;

    mapboxgl.accessToken = 'pk.eyJ1Ijoic2FudW5pYSIsImEiOiJja2lrNTN6cnEwNmpxMnFwa251NnZsbGMxIn0.bi_bHohbNm1r-c9tAIISMg';

    var map = new mapboxgl.Map({
        container: 'map',
        center: [Number(lon), Number(lat)],
        zoom: 9,
        style: 'mapbox://styles/mapbox/streets-v11'
    });
};

export function getDefaultTempMeasure() {
    const buttons = document.querySelectorAll('.controlls_degrees-item');
    if(+localStorage.getItem('temperatureMeasurement')) {
        buttons.forEach(button =>  {
            button.classList.remove('active');
            if (button.classList.contains('c')) {
                button.classList.add('active');
            } 
        });
        measures = 'M';
    } else { 
        buttons.forEach(button =>  {
            button.classList.remove('active');
            if (button.classList.contains('f')) {
                button.classList.add('active');
            } 
        });
        measures = 'I';
    }
};

export function getDefaultLanguage() {
    const buttons = document.querySelectorAll('.controlls_language-item');
    if(+localStorage.getItem('language')) {
        buttons.forEach(button =>  {
            button.classList.remove('active');
            if (button.classList.contains('ru')) {
                button.classList.add('active');
                changeToRu();
            } 
        });
    } else { 
        buttons.forEach(button =>  {
            button.classList.remove('active');
            if (button.classList.contains('en')) {
                button.classList.add('active');
                changeToEn();
            } 
        });
    }
};

function getCityNameByLocation(lat, lon) {

    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`)
    .then(result => result.json())
    .then(data =>  cityName = data.address.city)
    .then(cityName => {

        getDefaultTempMeasure();
        getDefaultLanguage();

        getCurrentValues(cityName);
    });
};

window.addEventListener('load', () => {
    let long;
    let lat;

    navigator.geolocation.getCurrentPosition(position => {
        lat = position.coords.latitude;
        long = position.coords.longitude;

        getCityNameByLocation(lat, long);
    });
        
});

switchTempButtons.onclick = function(event) {
    const buttons = document.querySelectorAll('.controlls_degrees-item');
    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
    
    if(event.target.textContent === 'C') {
        isCels = 1;
        measures = 'M';
    } else {
        isCels = 0;
        measures = 'I';
    }
    localStorage.setItem('temperatureMeasurement', isCels);
    getCurrentValues();
};

switchLangButtons.onclick = function(event) {
    const buttons = document.querySelectorAll('.controlls_language-item');
    let now = new Date();

    buttons.forEach(button => button.classList.remove('active'));
    event.target.classList.add('active');
    
    if (event.target.textContent === 'Ru') {
        isRuLanguage = 1;
        changeToRu();
    } else {
        changeToEn();  
        isRuLanguage = 0;
    }
    localStorage.setItem('language', isRuLanguage);
    getCurrentValues();
    getCurrentDate();
};

searchBtn.onclick = function() {
    onEnterCityName();
};

form.addEventListener('keypress', function(event) {
    if (event.keyCode === 13) {
        onEnterCityName();
   }
});
