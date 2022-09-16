let userManager = (function () {

    let tableHistory = document.getElementById("table-history")

    class User {

        constructor(username, password, email) {
            this.username = username;
            this.password = password;
            this.email = email;
            this.historyArr = [];

        }
    }

    class UserManager {

        constructor() {

            this.activUser = [];
            if (localStorage.getItem("users")) {
                this.activUser = JSON.parse(localStorage.getItem('activUser'));
            }
            this.users = [];
            if (localStorage.getItem("users")) {
                this.users = JSON.parse(localStorage.getItem('users'));
            }

        }

        addUsers(username, password, email) {
            if (!this.checkForExistingUser(username)) {
                this.users.push(new User(username, password, email, []));
                localStorage.setItem('users', JSON.stringify(this.users));

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

        addActivUser(username, password, email) {
            this.activUser.push(new User(username, password, email, []));
            localStorage.setItem("activUser", JSON.stringify(this.activUser));

        }

        addToHistory() {
            User.historyArr = donerManager.orderArr.slice();
            historyTable.historyCard(User.historyArr, tableHistory);
        }

    }

    return new UserManager();
})()