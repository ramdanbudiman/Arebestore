const navbarNav = document.querySelector(".navbar-nav");
const menuToggle = document.querySelector("#Product-menu");

menuToggle.onclick = () => {
  navbarNav.classList.toggle("active");
};

document.addEventListener("click", function (e) {
  if (!menuToggle.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
