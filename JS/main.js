
/* ---------------Open&Close Nav Mobile Menu-------------- */

const 
    openMobileMenuBtn = document.querySelector("#menuBtn"),
    closeMobileMenuBtn = document.querySelector("#closeNavMobile"),
    backdrop = document.querySelector(".backdrop"),
    mobileMenu = document.querySelector(".navMobileContainer");

openMobileMenuBtn.addEventListener("click", openMobileMenu)
closeMobileMenuBtn.addEventListener("click", closeMobileMenu)
backdrop.addEventListener("click",closeMobileMenu)
mobileMenu.addEventListener("click", function(ev) {
    ev.stopPropagation()
})




function openMobileMenu() {
    backdrop.classList.add("open")
}

function closeMobileMenu() {
    backdrop.classList.remove("open")
}

/* --------------Open in Browser------------- */

const openBtn = document.getElementById("openBtn"),
      formContainer = document.getElementsByClassName("formContainer"),
      btnContainer = document.getElementsByClassName("btnContainer");


openBtn.addEventListener("click", enterUsername)

function enterUsername() {
    btnContainer[1].style.display = "none";
    formContainer[0].style.display = "block";
}





