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

    if(userMail === "" || userPassword === "") {
        setErrorMessage("Felter ikke udfyldt");
    }
    else{
        console.log("felter er ikke tom");
        setErrorMessage("");
    }

    console.log(rememberMe);
}

//error message recipe
function setErrorMessage(errorMessage){
    if(errorMessage === "") {
        document.getElementById("errorMessageContainer").innerHTML = "";
    } else {
        document.getElementById("errorMessageContainer").innerHTML = "<h1>Der opstod en fejl</h1><p>" + errorMessage + "</p>";
    }
}


