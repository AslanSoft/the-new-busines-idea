let button2 = document.querySelector(".button2")
let loginpage = document.querySelector(".overview")
let loginbutton2 = document.querySelector(".loginbutton2")
let param = true
button2.addEventListener('click', (event) => {
    if(loginpage.classList.contains("remove-login")){
    loginpage.classList.remove("remove-login")
}
    param =! param
    if(param) {
        loginpage.style.display="none"
    }else{
        loginpage.style.display="flex"
    }
});

loginbutton2.addEventListener('click', () =>{
    loginpage.classList.add("remove-login")
    param = true
    console.log(loginpage)
});



