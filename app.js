// const email = document.getElementById("email");
const form = document.getElementById("form");
const message = document.querySelector(".message");
const errorIcon = document.querySelector(".error");

// form.addEventListener('submit', e => {
//     e.preventDefault();

//     if (ValidateEmail(document.form.text)) {
//         form.style.borderColor = "green";
//     } else {
//         form.style.borderColor = "red";
//     };
// })



// function ValidateEmail(x) {
//     var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
//     if (x.value.match(mailformat)) {
//         alert("You have entered a valid email address!");    //The pop up alert for a valid email address
//         document.form.text.focus();
//         return true;
//     }
//     else {
//         alert("You have entered an invalid email address!");    //The pop up alert for an invalid email address
//         document.form.text.focus();
//         return false;
//     }
// }


function ValidateEmail(inputText) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (inputText.value.match(mailformat)) {
        // alert("Valid email address!");
        // document.form.text.focus();
        form.classList.add("success")
        form.classList.remove("error")
        return true;
    }
    else {
        // alert("You have entered an invalid email address!");
        // document.form.text.focus();
        form.classList.add("error")
        form.classList.remove("success")
        return false;
    }
}
// function ValidateEmail(inputText) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (inputText.value.match(mailformat)) {
//         // alert("Valid email address!");
//         document.form.text.focus();
//         form.style.borderColor = "var(--Desaturated-Red);";
//         form.style.borderWidth = "0.01px";
//         message.style.display = "none";
//         errorIcon.style.display = "none";
//         return true;
//     }
//     else {
//         // alert("You have entered an invalid email address!");
//         document.form.text.focus();
//         form.style.borderColor = "red";
//         form.style.borderImageWidth = "2px";
//         message.style.display = "block";
//         errorIcon.style.display = "block";
//         return false;
//     }
// }