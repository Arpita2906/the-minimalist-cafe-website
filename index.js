let email = document.getElementById("email");
let password = document.getElementById("password");
let submitButton = document.getElementById("submit");
let error = document.getElementById("error");
error.innerHTML = '';

let enteredEmail;
let enteredPassword;

email.addEventListener("input",function(e){
    enteredEmail = e.target.value;
});

password.addEventListener("input",function(e){
    enteredPassword = e.target.value;
});

submitButton.addEventListener("click",function(e){
    e.preventDefault();
    if(enteredPassword && enteredEmail){
        window.location.replace("home.html");
    }else{
        error.innerHTML = '<h3>Enter the email and password</h3>'
    }
});