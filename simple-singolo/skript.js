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
    totalNavItems = document.getElementsByClassName("navigation_item"),
    portfolioImages = document.querySelector("portfolio_images"),
    portfolioArray = document.getElementsByClassName("images_item");

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

for (let i = 0; i < totalFilter.length; i++) {

    totalFilter[i].addEventListener('click', showActiveFilter, false);
    totalFilter[i].addEventListener('click', filterPortfolioImages, false);
    totalFilter[i].addEventListener('click', showAllImagesWithoutFilters, false);
    
    
}

for (let i = 0; i <  totalNavItems.length; i++) {

    totalNavItems[i].addEventListener('click', showActiveNav, false);
}

let burgerHide = document.querySelector(".burger-page_wrapper"),
    burgerOpen = document.querySelector(".burger_label"),
    burgerClose = document.querySelector(".burger-page_close");

function closeBurgerMenu (event) {
    event.preventDefault();
    document.querySelector(".burger-page").style.left = "-768px";

}

function openBurgerMenu (event) {
    event.preventDefault();
    document.querySelector(".burger-page").style.left = "0"
}

 burgerHide.addEventListener('click', closeBurgerMenu);
 
 burgerOpen.addEventListener('click', openBurgerMenu);

burgerClose.addEventListener('click', closeBurgerMenu);


  const anchors = document.querySelectorAll('a[href*="#"]')

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