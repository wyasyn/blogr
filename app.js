const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav =document.querySelector(".navigation");
const option = document.querySelectorAll("select");

function addActive(){
    nav.classList.add("active");
}
function removeActive(){
    nav.classList.remove("active");
}

menu.addEventListener("click", addActive);
close.addEventListener("click", removeActive);
option.forEach(n => n.addEventListener("change", removeActive));