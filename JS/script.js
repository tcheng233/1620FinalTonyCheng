const toggle = document.querySelector(".toggle")
const body = document.querySelector("body")

toggle.addEventListener("click",(e)=>{
    if (body.classList.contains("light-theme")) {
        body.classList.remove("light-theme")
        body.classList.add("dark-theme")
    }
    else {
        body.classList.remove("dark-theme")
        body.classList.add("light-theme")
    }


})