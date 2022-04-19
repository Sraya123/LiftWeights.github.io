let navList = document.querySelector("#nav-container");
let hamBurger = document.querySelector("#burger");
let navBar = document.querySelector("#navbar");
let getLogo = document.querySelector(".logo_class");

hamBurger.addEventListener("click",()=>{
    navBar.classList.toggle("nav_height_inc");
    navList.classList.toggle("nav_container_show");
    getLogo.classList.toggle("logo_show");
    
});