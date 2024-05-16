function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.nav1');
  const scrolled = window.scrollY > navbar.offsetHeight;
  navbar.classList.toggle('navbar-scrolled', scrolled);
});
