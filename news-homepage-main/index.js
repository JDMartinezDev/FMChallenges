const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.getElementById("menu");
const overlay = document.getElementsByClassName("overlay");

menuBtn.addEventListener("click", function () {
  menu.classList.remove("hide-aside");
  overlay[0].classList.add("show-overlay");
  let isMenuOpen = !menu.classList.contains("hide-aside");

  if (isMenuOpen) {
    disableScroll();
  } else {
    enableScroll();
  }
});

closeBtn.addEventListener("click", function () {
  menu.classList.add("hide-aside");
  overlay[0].classList.remove("show-overlay");
  let isMenuOpen = !menu.classList.contains("hide-aside");

  if (isMenuOpen) {
    disableScroll();
  } else {
    enableScroll();
  }
});

// Function to disable scrolling
function disableScroll() {
  var scrollTop = window.scrollY || document.documentElement.scrollTop;
  var scrollLeft = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo(scrollLeft, scrollTop);
  };
}

// Function to enable scrolling
function enableScroll() {
  window.onscroll = null;
}
