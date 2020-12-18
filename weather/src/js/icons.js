export function chooseCorrectIcon(d) {
    const time = document.querySelector('.time');

    if (+(time.textContent.substring(0, 2)) > 20 || +(time.textContent.substring(0, 2)) < 5) {
        return `./temp_icons/${d.weather.icon.substring(0, 3)}n.svg`;
    } else {
        return `./temp_icons/${d.weather.icon}.svg`;
    }
};

export function getIcons(data) {
    const currentDayIcon = document.querySelector('.icon__current');
    const firstDayIcon = document.querySelector('.icon__first');
    const secondDayIcon = document.querySelector('.icon__second');
    const thirdDayIcon = document.querySelector('.icon__third');
    
    currentDayIcon.src = chooseCorrectIcon(data.data[0]);
    firstDayIcon.src = `./temp_icons/${data.data[1].weather.icon}.svg`;
    secondDayIcon.src = `./temp_icons/${data.data[2].weather.icon}.svg`;
    thirdDayIcon.src = `./temp_icons/${data.data[3].weather.icon}.svg`;
};
