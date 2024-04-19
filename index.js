const closeNav = document.querySelector(".toggle--close");
const openNav = document.querySelector(".toggle--open");
const mobileNav = document.querySelector(".mobile--nav");

closeNav.addEventListener("click", (e)=>{
    closeNav.classList.toggle("hide");
    mobileNav.classList.toggle("hide")
    openNav.classList.toggle("hide");
})

openNav.addEventListener("click", (e)=>{
    openNav.classList.toggle("hide");
    mobileNav.classList.toggle("hide")
    closeNav.classList.toggle("hide");
})