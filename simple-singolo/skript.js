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

let triggerToOppen = document.getElementById("trigger"),
    triggerToClose = document.getElementById("trigger1");


// function openBurgerMenu() {
//    if (triggerToOppen.checked) {
//      return  document.getElementById("burger-page").style.display = "block";
//    } else document.getElementById("burger-page").style.display = "none";
// }

// function closeBurgerMenu() {
//     if (triggerToClose.checked) {
//       return document.getElementById("burger-page").style.display = "none";
//    } else document.getElementById("burger-page").style.display = "block";
// }
