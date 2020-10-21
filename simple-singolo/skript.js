const slideLeft = document.getElementById("slider_arrow__left");
const slideRight = document.getElementById("slider_arrow__right");
const totalFilter = document.getElementsByClassName("filter_item");
const totalNavItems = document.getElementsByClassName("navigation_item");
const portfolioImages = document.querySelector("portfolio_images");
const portfolioArray = document.getElementsByClassName("images_item");
const anchors = document.querySelectorAll('a[href*="#"]');
const burgerHide = document.querySelector(".burger-page_wrapper");
const burgerOpen = document.querySelector(".burger_label");
const burgerClose = document.querySelector(".burger-page_close");

let   totalImg = document.getElementsByClassName("slider_img");
let   indexForSlider = 0;
let   blockList = document.querySelectorAll("[data-anchor]");

//       Switching selector arrows

slideRight.addEventListener('click', moveLeft);
slideLeft.addEventListener('click', moveRight);

//        Filter Portfolio Items

for (let i = 0; i < totalFilter.length; i++) {
    totalFilter[i].addEventListener('click', showActiveFilter, false);
    totalFilter[i].addEventListener('click', filterPortfolioImages, false);
    totalFilter[i].addEventListener('click', showAllImagesWithoutFilters, false);
}

//          Colored navigation menu items

for (let i = 0; i <  totalNavItems.length; i++) {
    totalNavItems[i].addEventListener('click', showActiveNav, false);
}

//       Operations with burger menu

burgerHide.addEventListener('click', closeBurgerMenu);
 
burgerOpen.addEventListener('click', openBurgerMenu);

burgerClose.addEventListener('click', closeBurgerMenu);

//       Anchors of layout

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    e.preventDefault()
      
    const blockID = anchor.getAttribute('href').substr(1)
      
    document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
    })
}

window.addEventListener('scroll', (event) => {
      event.preventDefault();
      for (let i = 0; i < blockList.length; i++) {

            totalNavItems[i].classList.remove("navigation_item__active");
    }

    for (let i = 0; i < blockList.length; i++) {

        let CoordinatsOfBlockList = blockList[i].getBoundingClientRect();

        if (CoordinatsOfBlockList.top < 250 && CoordinatsOfBlockList.top > -270) {

            totalNavItems[i].classList.add("navigation_item__active");
            break;
        } 
    }
}
)

function moveLeft (event) {
    event.preventDefault();

    let slider = document.getElementById("slider"); 

    if (indexForSlider >= 1) {
        totalImg[indexForSlider].style.display = "none";
        totalImg[--indexForSlider].style.display = "inline";
        slider.style.backgroundColor = " #EA676B";
    } else   if  (indexForSlider === 0) {
        totalImg[indexForSlider].style.display = "none";
        totalImg[++indexForSlider].style.display = "inline";
        slider.style.backgroundColor = "#648BF0";
        }  
}

function moveRight (event) {
    event.preventDefault();

    let slider = document.getElementById("slider");

    if (indexForSlider >= 1) {
        totalImg[indexForSlider].style.display = "none";
        totalImg[--indexForSlider].style.display = "inline";
        slider.style.backgroundColor = " #EA676B";
    } else   if  (indexForSlider === 0) {
        totalImg[indexForSlider].style.display = "none";
        totalImg[++indexForSlider].style.display = "inline";
        slider.style.backgroundColor = "#648BF0";
        }  
}

function showActiveFilter (event) {
    event.preventDefault();

    for (let i = 0; i < totalFilter.length; i++) {
        totalFilter[i].classList.remove("filter_item__active");
    }
    event.currentTarget.classList.add("filter_item__active");
}

function showActiveNav (event) {
    event.preventDefault();

    for (let i = 0; i < totalNavItems.length; i++) {
        totalNavItems[i].classList.remove("navigation_item__active");
    }
    event.currentTarget.classList.add("navigation_item__active");
}

function closeBurgerMenu (event) {
    event.preventDefault();
    document.querySelector(".burger-page").style.left = "-768px";
}

function openBurgerMenu (event) {
    event.preventDefault();
    document.querySelector(".burger-page").style.left = "0"
}

function showAllImagesWithoutFilters (event) {
    let portfolioItems = document.getElementsByClassName("images_item");
    for (let i = 0; i < portfolioItems.length; i++) {
        if (event.target.classList.contains("all")) {
            portfolioItems[i].classList.remove("images_item__hidden");
          }
    }
} 

function filterPortfolioImages (event) {
    let portfolioItems = document.getElementsByClassName("images_item");
    for (let i = 0; i < portfolioItems.length; i++) {
        portfolioItems[i].classList.remove("images_item__hidden");
        if (portfolioItems[i].classList.contains("web") != event.target.classList.contains("web")) {
            portfolioItems[i].classList.add("images_item__hidden");
        } else if (portfolioItems[i].classList.contains("graf") != event.target.classList.contains("graf")) {
            portfolioItems[i].classList.add("images_item__hidden");
        } else if (portfolioItems[i].classList.contains("art") != event.target.classList.contains("art")) {
            portfolioItems[i].classList.add("images_item__hidden");
        }
    }
} 

