(function () {

    let loginUserName = document.getElementById("user-name");
    let loginPass = document.getElementById("password");
    let loginForm = document.getElementById("login-form");
    let loginBtn = document.getElementById("login-btn");
    let missUserErorr = document.getElementById("user-not-exist");
    let activUserName = document.getElementById("activ-user");
    let userEmail = document.getElementById("email");
    let email = document.getElementById("user-email");
    

    loginForm.addEventListener("input", function () {

        if (loginUserName.value && loginPass.value) {
            loginBtn.removeAttribute("disabled");
            missUserErorr.style.display = "none";
        } else {
            loginBtn.setAttribute("disabled", true);
        }
       
    });


    loginBtn.addEventListener("click", function (event) {
        event.preventDefault();

        if (userManager.checkForExistingUser(loginUserName.value) && userManager.checkForExistingPassword(loginPass.value)) {
            location.hash = "menu";
            userManager.addActivUser(userManager.users);
            localStorage.setItem("activUser", JSON.stringify(userManager.activUser));
            loginUserName.value = "";
            loginPass.value = "";
            missUserErorr.style.display = "none";
        } else {
            loginUserName.value = "";
            loginPass.value = "";
            missUserErorr.style.display = "block";

        }
    })

})()