const hamburger = document.querySelector(".ham_icon");
const navMenu = document.querySelector(".right_nav");
const navMenuList = document.querySelectorAll(".item_nav_list");

hamburger.addEventListener("click", mobileMenu);
for (i = 0; i < navMenuList.length; i++) {
  navMenuList[i].addEventListener("click", mobileMenu);
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
