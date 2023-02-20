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

$(document).ready(function(){
    $("loginButton").click(function(){
        $("box").animate({bottom: '250px'});
    });
});