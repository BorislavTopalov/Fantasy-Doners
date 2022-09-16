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
        userManager.activUser = [];
    })

    orderButton.addEventListener("click", function () {
        location.hash = "#delivery"
    })

    formDelivery.addEventListener("input", function (e) {
        if (formDelivery.checkValidity()) {
            deliveryButton.disabled = false;
        }

    })

    deliveryButton.addEventListener("click", function (e) {
        e.preventDefault();

        userManager.addToHistory;
        donerManager.orderArr.splice(0, donerManager.orderArr.length);
        location.hash = "#shopping-card";
        superScript.innerText = "";
        emptyCard.style.display = "block";
        orderButton.disabled = true;

    })

})()