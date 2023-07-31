const hamburgerMenu = document.querySelector("#hamburger-menu")
const mobileMenu = document.querySelector(".mobile-menu")
const header = document.querySelector("header")
let isMenuOpen = false;

hamburgerMenu.addEventListener("click", () => {
  if (isMenuOpen) {
    hamburgerMenu.textContent = "menu";
    mobileMenu.style.right = "-100%"
    header.style.position = "relative"
    enableScrolling()
    isMenuOpen = false;
  } else {
    hamburgerMenu.textContent = "close";
   header.style.position = "fixed"
    mobileMenu.style.right = "0"
    disableScrolling()
    isMenuOpen = true;
  }


});

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}