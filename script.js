

alert("welcome")

//variables
let un = document.querySelector('#un')
let psw = document.querySelector('#psw')
let cpsw = document.querySelector('#cpsw')
let submit = document.querySelector('#submit')


//check password
function validatePsw() {

    if (psw.value == cpsw.value) {

        return (true)
    }
    else {
        alert("The password you typed is incorret") //error display
        return(false);
    }
}

// check username
function validateun() {
    if (un.value.length >= 8) {

        return(true);
    }
    else {
        alert("Your Username must be more than 8 characters long")

    }
}
//submitting the details.
submit.addEventListener("click", function () {
    if (validatePsw() == true) {
        if (validateun() == true) {

            alert(" Username and password has been set")
        }
        return(false);
    }
})






