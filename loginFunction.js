// const users{
//     mails
//     passwords
// }
//
//
// document.getElementById("loginButton").onclick = function(){
//
//     slide in the login div
// }

// $(document).ready(function(){
//     $("loginButton").click(function(){
//         $("box").animate({bottom: '250px'});
//     });
// });

const loginContainer = document.getElementById("loginContainer");

function showLoginContainer(){
    loginContainer.classList.add("loginVisible");
}

function hideLoginContainer(){
    loginContainer.classList.remove("loginVisible");
}s