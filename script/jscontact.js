const form = document.querySelector(".form");

const name = document.getElementById("name");
const nameError = document.querySelector(".nameError");

const subject = document.getElementById("subject");
const subjectError = document.querySelector(".subjectError");

const adress = document.getElementById("adress");
const adressError = document.querySelector(".adressError");

const email = document.getElementById("email");
const emailError = document.querySelector(".emailError");

const button = document.getElementById("button")

const submitSuccessful = document.querySelector(".submitSuccess")


function formValidation() {
    event.preventDefault();

    if(lengthChecker(name.value, 3) === true) {
        nameError.style.display = "none"
    } else {
        nameError.style.display = "block"
    }

    if(lengthChecker(subject.value, 9) === true) {
        subjectError.style.display = "none";
    } else {
        subjectError.style.display = "block";
    }

    if(lengthChecker(adress.value, 24) === true) {
        adressError.style.display = "none";
    } else {
        adressError.style.display = "block";
    }

    if(emailValidation(email.value) === true) {
        emailError.style.display = "none";
    } else {
        emailError.style.display = "block";
    }

}


function lengthChecker(value, length) {
    if(value.trim().length > length) {
        return true;
    } else {
        return false;
    }
}

function emailValidation(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatch = regEx.test(email);
    return patternMatch;
}

form.addEventListener("submit", formValidation);

function submissionSuccesful() {
    if(lengthChecker(name.value, 3) === false || 
    lengthChecker(subject.value, 9) === false || 
    lengthChecker(adress.value, 24) === false ||
    emailValidation(email.value) === false) {
        submitSuccessful.style.display = "none";
    } else {
        submitSuccessful.style.display = "flex";
    }
}

form.addEventListener("submit", submissionSuccesful);