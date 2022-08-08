const mobile_menu = document.getElementById("mobile-menu");
const navbar_menu = document.querySelector(".navbar-menu");

mobile_menu.addEventListener("click", function () {
    mobile_menu.classList.toggle("is-active");
    navbar_menu.classList.toggle("active");
});


let faq=document.querySelectorAll(".faq").forEach(function(item){
    item.addEventListener("click",function(){
        item.classList.toggle("active");
    })
    
    });