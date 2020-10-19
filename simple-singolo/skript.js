let slideLeft = document.getElementById("slider_arrow__left");
let slideRight = document.getElementById("slider_arrow__right");
let totalImg = document.getElementsByClassName("slider_img");
let slider = document.getElementById("slider");
let index = 0;

slideRight.addEventListener('click', moveLeft);

function moveLeft () {
    
    if (index >= 1) {
        totalImg[index].style.display = "none";
        totalImg[--index].style.display = "inline";
        slider.style.backgroundColor = " #EA676B";
    } else   if  (index === 0) {
        totalImg[index].style.display = "none";
        totalImg[++index].style.display = "inline";
        slider.style.backgroundColor = "#648BF0";
        }  
}

slideLeft.addEventListener('click', moveRight);
function moveRight () {
    if (index >= 1) {
        totalImg[index].style.display = "none";
        totalImg[--index].style.display = "inline";
        slider.style.backgroundColor = " #EA676B";
    } else   if  (index === 0) {
        totalImg[index].style.display = "none";
        totalImg[++index].style.display = "inline";
        slider.style.backgroundColor = "#648BF0";
        }  
}

let totalFilter = document.getElementsByClassName("filter_item"),
    portfolioImages = document.querySelector("portfolio_images");

    function showActiveFilter (event) {
        event.preventDefault();

        for (let i = 0; i < totalFilter.length; i++) {
            totalFilter[i].classList.remove("filter_item__active");
        }
        event.currentTarget.classList.add("filter_item__active");
    }
for (let i = 0; i < totalFilter.length; i++) {

    totalFilter[i].addEventListener('click', showActiveFilter, false);
}