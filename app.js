const navToggle = document.getElementById('nav-toggle');
const navbarLinks = document.getElementById('navbar-links');
const toggleIcon = document.getElementById('toggle-icon'); // Define toggleIcon

navToggle.addEventListener('click', function() {
  navbarLinks.classList.toggle('hidden');

  if (navbarLinks.classList.contains('hidden')) {
    toggleIcon.src = 'images/icon-hamburger.svg';
  } else {
    toggleIcon.src = 'images/icon-close-menu.svg';
  }
});
