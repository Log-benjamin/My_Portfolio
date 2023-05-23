const topLogo = document.querySelector('.logo-image img');
const topMenu = document.querySelector('.humberger img');
const menuList = document.querySelector('.desk-nav');

topMenu.addEventListener('click', () => {
  topLogo.classList.toggle('active');
  topMenu.classList.toggle('active');
  menuList.classList.toggle('active');
});

window.onscroll = () => {
  topLogo.classList.remove('active');
  topMenu.classList.remove('active');
  menuList.classList.remove('active');
};