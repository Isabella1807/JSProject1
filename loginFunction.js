const loginContainer = document.getElementById("loginContainer");

function showLoginContainer(){
    loginContainer.classList.add("loginVisible");
}

function hideLoginContainer(){
    loginContainer.classList.remove("loginVisible");
}

function submitLoginForm(){
    const userMail = document.getElementById("userMail").value;
    const userPassword = document.getElementById("userPassword").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    console.log(rememberMe);
}
