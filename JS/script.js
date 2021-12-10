const toggle = document.querySelector(".toggle")
const body = document.querySelector("body")

// This will toggle between light theme and dark theme when button is clicked
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
// This will log the value of input to console when button is click
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