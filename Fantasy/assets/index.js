function DonerCard(image, name, weight, category, price) {
    this.imageUrl = image;
    this.name = name;
    this.weight = weight;
    this.category = category;
    this.price = price;
}

function History(date, adress, order, price) {
    this.date = date;
    this.adress = adress;
    this.order = order;
    this.price = price;

}

let menu = document.getElementById("menu");
let shoppingCard = document.getElementById("shopping-card");
let deliveryCard = document.getElementById("delivery");
let allProducts = document.getElementById("all-menues");
let orderCard = document.getElementById("order");
let sumPrice = document.getElementById("sum-price");
let emptyCard = document.getElementById("empty-card");
let orderButton = document.getElementById("order-btn");
let superScript = document.getElementById("super-script");




orderButton.addEventListener("click", function () {
    location.hash = "#delivery"
})

let productsArr = [];
let orderArr = [];
let historyArr = [];

let hashHandleChange = function () {
    let hash = location.hash.slice(1);
    switch (hash) {
        case "menu":
            menu.style.display = ("block");
            shoppingCard.style.display = ("none");
            deliveryCard.style.display = ("none");
            donerCard(productsArr, allProducts);
            break;
        case "shopping-card":
            menu.style.display = ("none");
            shoppingCard.style.display = ("block");
            deliveryCard.style.display = ("none");
            cartTable(orderArr, orderCard, sumPrice);

            break;
        case "delivery":
            menu.style.display = ("none");
            shoppingCard.style.display = ("none");
            deliveryCard.style.display = ("block");

            break;
        default:
            menu.style.display = ("block");
            shoppingCard.style.display = ("none");
            deliveryCard.style.display = ("none");
    }
}
window.addEventListener("load", hashHandleChange);
window.addEventListener("hashchange", hashHandleChange);

function donerCard(doners, div) {
    div.innerHTML = "";
    for (let i = 0; i < doners.length; i++) {
        let doner = doners[i];
        let donerContainer = document.createElement("div");

        donerContainer.classList.add('product-card');

        let image = document.createElement("img");
        image.src = doner.imageUrl;
        image.alt = "doner";

        let name = document.createElement("h3");
        name.innerText = doner.name;

        let weight = document.createElement("h3");
        weight.innerText = doner.weight;

        let category = document.createElement("h3");
        category.innerText = doner.category;

        let price = document.createElement("h3");
        price.innerText = doner.price;

        let inputButton = document.createElement("input");
        inputButton.type = "number";
        inputButton.placeholder = "input count"
        // inputButton.addEventListener("input", function(e){
        //     let inputNumber = e.target.value;
        //     for(let j = 0; j < inputNumber; j++){
        //         orderArr.push(doner);
        //         console.log(orderArr);
        //     }
        // })
        
        let emptyCard = document.getElementById("empty-card");

        let addButton = document.createElement("button");
        addButton.innerText = "add to card";
      
        addButton.addEventListener("click", function () {
            orderArr.push(doner);
          
            superScript.innerText = "" + orderArr.length;
            console.log(orderArr);

            emptyCard.style.display = "none";
            hashHandleChange();

        })

        donerContainer.append(image, name, weight, category, price, inputButton, addButton);
        div.appendChild(donerContainer);

    }
}
for (let i = 0; i < DATA.length; i++) {
    productsArr.push(new DonerCard(DATA[i].image, DATA[i].name, DATA[i].weight, DATA[i].category, DATA[i].price));

}


function cartTable(donerArr, div, sum) {
    div.innerHTML = "";
    let totalSum = 0;
    for (let i = 0; i < donerArr.length; i++) {

        let addDoner = document.createElement("div");
        addDoner.classList.add("add-doner");

        let num = document.createElement("h2");
        num.innerText = i + 1;

        let name = document.createElement("h2");
        name.innerText = donerArr[i].name;

        let price = document.createElement("h2");
        price.innerText = donerArr[i].price;

        let inputCount = document.createElement("input");
        inputCount.type = "number"
        inputCount.placeholder = "Count:";
        inputCount.classList.add("input");

       

        let buttonRemove = document.createElement("button");
        buttonRemove.innerText = "X";


        buttonRemove.addEventListener("click", function () {
            donerArr.splice(donerArr[i], 1);

            if (donerArr.length === 0) {
                emptyCard.style.display = "block";
                orderButton.disabled = true;
            }
            hashHandleChange();
        });

        totalSum += donerArr[i].price;
        // inputCount.addEventListener("input", function(e){
        //     let inputNumber = e.target.value;
        //     donerArr[i].price * inputNumber
        // })

        addDoner.append(num, name, price, inputCount, buttonRemove);
        div.appendChild(addDoner);
        orderButton.disabled = false;
    }

    sum.innerText = "Общата сума е: " + totalSum.toFixed(2);
}

let formDelivery = document.getElementById("form-delivery");
let personName = document.getElementById("name");
let personNumber = document.getElementById("phone-number");
let personAdress = document.getElementById("adress");
let deliveryButton = document.getElementById("submit-order");
let allHistory = document.getElementById("history");
let tableHistory = document.getElementById("table-history")

formDelivery.addEventListener("input", function (e) {
    if (formDelivery.checkValidity()) {
        deliveryButton.disabled = false;
    }

})

deliveryButton.addEventListener("click", function (e) {
    e.preventDefault();
    location.hash = "#shopping-card";
    historyArr = orderArr.slice();
    orderArr.splice(0, orderArr.length);
    superScript.innerText = "";
    emptyCard.style.display = "block";
    orderButton.disabled = true;
   
    console.log(historyArr);
    historyCard(historyArr, tableHistory);
})

function historyCard(array, div){

    for(let i = 0; i < array.length; i++){

        let lastOrder = document.createElement("tr");
        lastOrder.classList.add("last-order");

        let date = document.createElement("td");
        date.innerText = new Date().toLocaleDateString();

        let adress = document.createElement("td");
        adress.innerText = personAdress.value;

        let lastProduct = document.createElement("td");
        lastProduct.innerText = array[i].name;

        let lastTotalSum = document.createElement("td");
        lastTotalSum.innerText = array[i].price;

        lastOrder.append(date, adress, lastProduct, lastTotalSum);
        div.appendChild(lastOrder);
    }

}
let search = document.getElementById("filter-field");
    search.addEventListener("keyup", function(event){
        let text = event.target.value;
        let filtered = filter(text);
        donerCard(filtered, allProducts);

    })

function filter(text){
    if(typeof(text) === "string" && text.trim().length > 0){
        let filtered = [];
        text = text.toLowerCase();
        for(let i = 0; i < productsArr.length; i++){
            let product = productsArr[i];
            if( product.name.toLowerCase().includes(text)){
                filtered.push(product);
            }
        }
        return filtered;
    }else {
        return productsArr;
    }

}