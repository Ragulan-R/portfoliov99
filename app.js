const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLinks = document.querySelectorAll('.navbar__links')

menu.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})

// only works on home button
navLinks.addEventListener('click', function () {
  menu.classList.toggle('is-active')
  menuLinks.classList.toggle('active')
})
