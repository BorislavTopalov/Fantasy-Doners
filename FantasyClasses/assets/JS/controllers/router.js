let router = (function () {

    let menu = document.getElementById("menu");
    let shoppingCard = document.getElementById("shopping-card");
    let deliveryCard = document.getElementById("delivery");
    let orderCard = document.getElementById("order");
    let allProducts = document.getElementById("all-menues");
    let login = document.getElementById("login");
    let register = document.getElementById("register");
    let sumPrice = document.getElementById("sum-price");


    class Router {


        handleHashChange() {
            let hash = location.hash.slice(1);
            switch (hash) {
                case "login":
                    login.style.display = ("block");
                    register.style.display = ("none")
                    menu.style.display = ("none");
                    shoppingCard.style.display = ("none");
                    deliveryCard.style.display = ("none");
                    break;
                case "register":
                    login.style.display = ("none");
                    register.style.display = ("block")
                    menu.style.display = ("none");
                    shoppingCard.style.display = ("none");
                    deliveryCard.style.display = ("none");
                    
                    break;
                case "menu":
                    login.style.display = ("none");
                    register.style.display = ("none")
                    menu.style.display = ("block");
                    shoppingCard.style.display = ("none");
                    deliveryCard.style.display = ("none");
                    donerManager.getAllDoners(DATA);
                    cardRender.donerCard(donerManager.allDoners, allProducts);
                    break;
                case "shopping-card":
                    login.style.display = ("none");
                    register.style.display = ("none")
                    menu.style.display = ("none");
                    shoppingCard.style.display = ("block");
                    deliveryCard.style.display = ("none");
                    orderCardRender.cartTable(donerManager.orderArr, orderCard, sumPrice);
                    break;
                case "delivery":
                    login.style.display = ("none");
                    register.style.display = ("none")
                    menu.style.display = ("none");
                    shoppingCard.style.display = ("none");
                    deliveryCard.style.display = ("block");
                    break;
                default:
                    login.style.display = ("block");
                    register.style.display = ("none")
                    menu.style.display = ("none");
                    shoppingCard.style.display = ("none");
                    deliveryCard.style.display = ("none");
                    break;
            }
        }
    }

    return new Router();
})()