const topLogo = document.querySelector(".logo-image img");
const topMenu = document.querySelector(".humberger img");
const menuList = document.querySelector(".desk-nav");

topMenu.addEventListener("click", function(){
    topLogo.classList.toggle("active");
    topMenu.classList.toggle("active");
    menuList.classList.toggle("active");
});