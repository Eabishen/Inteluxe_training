const navbar = document.querySelector("#nav_custom");

// To know scrolling
let isScrollingDown = false;

const navbarBG = () => {
  if (!isScrollingDown && window.scrollY > 20) {
    navbar.classList.add("stickycont");
    isScrollingDown = true;
  } else if (isScrollingDown && window.scrollY <= 20) {
    navbar.classList.remove("stickycont");
    isScrollingDown = false;
  }
};

document.addEventListener("scroll", navbarBG);

// To Find Navbar height

const navbarHeightfinder = () => {
  const offsetHeight = navbar.offsetHeight;

  document.documentElement.style.setProperty(
    "--navbar-height",
    offsetHeight + "px"
  );
};
document.addEventListener("DOMContentLoaded", navbarHeightfinder);

document.addEventListener("resize", navbarHeightfinder);

//To Check Element Position in the Screen using getBoundingClientRect method and
// set it as CSS variables to use

const elementToCheck = document.getElementById("elementToCheck");

function checkElementPosition() {
  const rect = elementToCheck.getBoundingClientRect();

  document.documentElement.style.setProperty("--start-point", rect.left + "px");

  document.documentElement.style.setProperty("--end-point", rect.right + "px");
}

document.addEventListener("DOMContentLoaded", checkElementPosition);
document.addEventListener("resize", checkElementPosition);
