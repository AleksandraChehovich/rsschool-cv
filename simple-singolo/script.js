const slideLeft = document.getElementById("slider_arrow__left");
const slideRight = document.getElementById("slider_arrow__right");
const totalFilter = document.getElementsByClassName("filter_item");
const totalNavItems = document.getElementsByClassName("navigation_item");
const portfolioImages = document.querySelector("portfolio_images");
const portfolioArray = document.querySelectorAll(".images_item");
const anchors = document.querySelectorAll('a[href*="#"]');
const burgerOpen = document.querySelector(".burger_label");
const burgerClose = document.querySelector(".burger-page_close");
const burgerNavigation = document.getElementsByClassName("navigation_item__burger");
const svgBurgerClose = document.querySelector(".burger_label__close");

let   totalImg = document.getElementsByClassName("slider_img");
let   indexForSlider = 0;
let   slider = document.getElementById("slider");
let   blockList = document.querySelectorAll("[data-anchor]");

//        Filter Portfolio Items

for (let i = 0; i < totalFilter.length; i++) {
    totalFilter[i].addEventListener('click', showActiveFilter, false);
    totalFilter[i].addEventListener('click', filterPortfolioImages, false);
    totalFilter[i].addEventListener('click', showAllImagesWithoutFilters, false);
}

for (let i = 0; i < portfolioArray.length; i++) {    
    if (i >= 12) {
        portfolioArray[i].remove();
    }
}

//          Colored navigation menu items

for (let i = 0; i <  totalNavItems.length; i++) {
    totalNavItems[i].addEventListener('click', showActiveNav, false);
}

//       Operations with burger menu
for (let i = 0; i < burgerNavigation.length; i++) {
    burgerNavigation[i].addEventListener('click', closeBurgerMenu);
}

svgBurgerClose.addEventListener('click', closeBurgerMenu);
 
burgerOpen.addEventListener('click', openBurgerMenu);

burgerClose.addEventListener('click', closeBurgerMenu);

//       Anchors of layout

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
    e.preventDefault();
      
    const blockID = anchor.getAttribute('href').substr(1);
      
    document.getElementById(blockID).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
    })
    })
}

window.addEventListener('scroll', (event) => {

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


const multiItemsSlider = (function() {
    return function(selector, config) {
        let currentElement = document.querySelector(selector);
        const sliderWrapper = currentElement.querySelector('.slider_wrapper');
        const sliderItems = currentElement.querySelectorAll('.container_img');
        const sliderControls = currentElement.querySelectorAll('.slider_arrow');
        const sliderControlLeft = currentElement.querySelector('.slider_arrow__left');
        const sliderControlRight = currentElement.querySelector('.slider_arrow__right');
        let wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width);
        let itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width);
        let positionLeftItem = 0;
        let transform = 0;
        let step = itemWidth / wrapperWidth * 100;
        let items = [];

        sliderItems.forEach(function(item, index) {
            items.push({ item: item, position: index, transform: 0});
        });

        let position = {
            getItemMin: function() {
                let indexItem = 0;
                items.forEach(function(item, index) {
                    if (item.position < items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            }, 
            getItemMax: function() {
                let indexItem = 0;
                items.forEach(function(item, index) {
                    if (item.position > items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getMin: function() {
                return items[position.getItemMin()].position;
            },
            getMax: function() {
                return items[position.getItemMax()].position;
            }
        }

        let transformItem = function(direction) {
            let nextItem;
            if (direction === 'right') {
                positionLeftItem++;
                if((positionLeftItem + wrapperWidth / itemWidth -1) > position.getMax()) {

                    nextItem = position.getItemMin();
                    items[nextItem].position = position.getMax() + 1;
                    items[nextItem].transform +=  items.length * 100;
                    items[nextItem].item.style.transform = `translateX(${items[nextItem].transform}%)`;
                }
                transform -= step;
            }
            if (direction ==='left') {
                positionLeftItem--;
                if (positionLeftItem < position.getMin()) {
                    nextItem = position.getItemMax();
                    items[nextItem].position = position.getMin() - 1;
                    items[nextItem].transform -= items.length * 100;
                    items[nextItem].item.style.transform = `translateX(${items[nextItem].transform}%)`;
                }
                transform += step;
            }
            sliderWrapper.style.transform = `translateX(${transform}%)`;
        }

        let controlClick = function(e) {
            if (e.target.classList.contains('slider_arrow')) {
                e.preventDefault();
                let direction = e.target.classList.contains('slider_arrow__right') ? 'right' : 'left';
                transformItem(direction);
            }
        };

        let setUpListener = function() {
            sliderControls.forEach(item => {
                item.addEventListener('click', controlClick);
            });
        }

        setUpListener();

        return {
            right: function() {
                transformItem('right');
            },
            left: function() {
                transformItem('left');
            }
        }
    }
    }());

let slidImg = multiItemsSlider('.slider');


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

function closeBurgerMenu () {
    document.querySelector(".burger-page").style.left = "-768px";
}

function openBurgerMenu () {
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
