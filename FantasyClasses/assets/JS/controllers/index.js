(function () {

    let formDelivery = document.getElementById("form-delivery");
    let deliveryButton = document.getElementById("submit-order");
    let emptyCard = document.getElementById("empty-card");
    let orderButton = document.getElementById("order-btn");
    let superScript = document.getElementById("super-script");  
    let exitBtn = document.getElementById("profil-exit");

    exitBtn.addEventListener("click", function(event){
        event.preventDefault();
        location.hash = "#login";
        userManager.activUser = null;     
        localStorage.setItem("activUser", "{}");
    })

    orderButton.addEventListener("click", function () {
        location.hash = "#delivery"
    })

    formDelivery.addEventListener("input", function (e) {
        if (formDelivery.checkValidity()) {
            deliveryButton.disabled = false;
        }

    })

    function addToHistory(order) {
        donerManager.historyArr.push(order)
        userManager.activUser.historyArr = donerManager.historyArr.slice();
        localStorage.setItem("users", JSON.stringify(userManager.users));
        localStorage.setItem("activUser", JSON.stringify(userManager.activUser));

    }

    function createHistory(orderArr) {
        orderArr.forEach(elem => {
            addToHistory(elem);
        });
    }


    deliveryButton.addEventListener("click", function (e) {
        e.preventDefault();
        createHistory(donerManager.orderArr);       
        donerManager.orderArr.splice(0, donerManager.orderArr.length);
        location.hash = "#shopping-card";
        superScript.innerText = "";
        emptyCard.style.display = "flex";
        orderButton.disabled = true;       
        console.log(donerManager.historyArr);
    })

})()