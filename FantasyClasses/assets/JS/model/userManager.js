let userManager = (function () {

    let loginUserName = document.getElementById("user-name");
    let loginPass = document.getElementById("password");

    class User {

        constructor(username, password, email, historyArr) {
            this.username = username;
            this.password = password;
            this.email = email;
            this.historyArr = historyArr;

        }
    }

    class UserManager {

        constructor() {

            this.activUser = {};
            if (localStorage.getItem("users")) {
                this.activUser = JSON.parse(localStorage.getItem("activUser"));
            }
            this.users = [];
            if (localStorage.getItem("users")) {
                this.users = JSON.parse(localStorage.getItem("users"));
            }

        }

        addUsers(username, password, email, historyArr) {
            if (!this.checkForExistingUser(username)) {
                this.users.push(new User(username, password, email, historyArr));
                localStorage.setItem("users", JSON.stringify(this.users));

                return true;
            }
            return false;

        }

        checkForExistingUser(username) {
            return this.users.some(user => user.username === username);

        }
        checkForExistingPassword(password) {
            return this.users.some(user => user.password === password);

        }

       
        addActivUser(userArr){
            this.activUser = userArr.find(element => {
                if(element.username === loginUserName.value && element.password === loginPass.value){
                    localStorage.setItem("activUser", JSON.stringify(this.activUser));
                    return true;
                }
                return false;
            })
        }


    }

    return new UserManager();
})()