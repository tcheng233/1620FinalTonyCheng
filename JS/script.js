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

const submit = document.querySelector("#frm-btn")

submit.addEventListener("click",(e)=>{
    const emailInput = document.querySelector("#email")
    const nameInput = document.querySelector("#name")
    const msgInput = document.querySelector("#msg")
    

    const submitObj = {
        email : emailInput.value ,
        name : nameInput.value , 
        message: msgInput.value
    }

    console.log(submitObj)
})