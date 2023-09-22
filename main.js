const OPEN_CLASSNAME = "open";

const navLinks = document.getElementById("header_nav_item");

function toggleMenu() {
  if (navLinks.classList.contains(OPEN_CLASSNAME)) {
    navLinks.classList.remove(OPEN_CLASSNAME);
  } else {
    navLinks.classList.add(OPEN_CLASSNAME);
  }
}