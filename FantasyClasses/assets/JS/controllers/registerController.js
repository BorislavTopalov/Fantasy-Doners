(function () {

    let userName = document.getElementById("reg-user-name");
    let email = document.getElementById("user-email");
    let password = document.getElementById("reg-password");
    let verifyPassword = document.getElementById("verify-password");
    let regButton = document.getElementById("reg-btn");
    let userExistsError = document.getElementById("userExistsError");
    let passMismatchError = document.getElementById("passMismatchError");
    let EmailError = document.getElementById("emailError");
    let registerForm = document.getElementById("register-form");

    registerForm.addEventListener("input", function () {

        if (userName.value && password.value && verifyPassword.value && email.value) {
            regButton.removeAttribute('disabled');
        } else {
            regButton.setAttribute('disabled', true);
        }

        if (password.value && verifyPassword.value && password.value !== verifyPassword.value) {
            passMismatchError.style.display = 'block';
            regButton.setAttribute('disabled', true);
        } else {
            passMismatchError.style.display = 'none';
        }

        if (email.value.includes("@") || email.value === "") {
            EmailError.style.display = "none";
        } else {
            EmailError.style.display = "block";
        }

    });

    regButton.addEventListener("click", function (event) {
        event.preventDefault();

        if (userManager.addUsers(userName.value, password.value, email.value)) {
            location.hash = "login";
            userName.value = "";
            password.value = "";
            verifyPassword.value = "";
            email.value = "";
            userExistsError.style.display = "none";

        } else {
            userExistsError.style.display = "block";
            userName.value = "";
            password.value = "";
            verifyPassword.value = "";
            email.value = "";
        }

    })

})()


