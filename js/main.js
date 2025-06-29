const menuIcon = document.getElementById("menu-icon");
const navbar = document.getElementById("navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("move");
  navbar.classList.toggle("active");
};
