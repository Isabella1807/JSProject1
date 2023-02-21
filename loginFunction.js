const users = [{
    mail: "mymail@mail.dk",
    password: "mypassword1234",
}, {
    mail: "isa@mail.dk",
    password: "isa",
}, {
    mail: "best@mail.dk",
    password: "best",
}, {
    mail: "mail@mail.com",
    password: "isa123",
}, {
    mail: "yahoo@jahoo.live",
    password: "live",
}, {
    mail: "fedmail@live.dk",
    password: "dk5",
}];

const loginContainer = document.getElementById("loginContainer");

function showLoginContainer() {
    loginContainer.classList.add("loginVisible");
}

function hideLoginContainer() {
    loginContainer.classList.remove("loginVisible");
}

function submitLoginForm() {
    const userMail = document.getElementById("userMail").value;
    const userPassword = document.getElementById("userPassword").value;
    const rememberMe = document.getElementById("rememberMe").checked;

    setErrorMessage("");

    if (userMail === "" || userPassword === "") {
        setErrorMessage("Felter ikke udfyldt");
    } else {
        const user = findUserByMail(userMail);
        if (user === null){
            setErrorMessage("Vi kan ikke logge dig ind. E-mail og/eller adgangskode er ikke korrekt.");
        } else {
            if (userPassword !== user.password){
                setErrorMessage("Vi kan ikke logge dig ind. E-mail og/eller adgangskode er ikke korrekt.");
            } else {
                hideLoginContainer();
            }
        }
    }
}

//error message recipe
function setErrorMessage(errorMessage) {
    if (errorMessage === "") {
        document.getElementById("errorMessageContainer").innerHTML = "";
    } else {
        document.getElementById("errorMessageContainer").innerHTML = "<h1>Der opstod en fejl</h1><p>" + errorMessage + "</p>";
    }
}

function findUserByMail (mail) {
    let foundUser = null;

    for (let i = 0; i < users.length; i++) {
        if (users[i].mail === mail) {
            foundUser = users[i]; //since im changing this variable it will give an error, unless the variable type is let
            break;
        }
    }

    return foundUser;
}
