function validateEmail() {

    let email = document.getElementById("email").value;

    let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (pattern.test(email)) {
        document.getElementById("message").innerHTML = "Valid Email";
    } else {
        document.getElementById("message").innerHTML = "Invalid Email";
    }
}