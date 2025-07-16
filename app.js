let button2 = document.querySelector(".button2")
let loginpage = document.querySelector(".loginpage")
let loginbutton2 = document.querySelector(".loginbutton2")
let param = true
button2.addEventListener('click', (event) => {
    param =! param
    if(param) {
        loginpage.style.display="none"
    }else{
        loginpage.style.display="flex"
    }
});

loginbutton2.addEventListener('click', () =>{
    loginpage.style.display="none"
    param = true
});