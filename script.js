const topLogo = document.querySelector('.logo-image img');
const topMenu = document.querySelector('.humberger img');
const menuList = document.querySelector('.desk-nav');
const menuListOptions = document.querySelectorAll('.desk-nav li a');
topMenu.addEventListener('click', () => {
  topLogo.classList.toggle('active');
  topMenu.classList.toggle('active');
  menuList.classList.toggle('active');
});

function closeMobileMenu() {
  topLogo.classList.remove('active');
  topMenu.classList.remove('active');
  menuList.classList.remove('active');
}

menuListOptions.addEventListener(onclick, () => {
  closeMobileMenu();
});