let orderCardRender = (function(){

    let emptyCard = document.getElementById("empty-card");
    let orderButton = document.getElementById("order-btn");
    let superScript = document.getElementById("super-script");

    class OrderRender {

        cartTable(orderArr, div, sum) {
            div.innerHTML = "";
            let totalSum = 0;
            for (let i = 0; i < orderArr.length; i++) {
                let newOrder = orderArr[i];

                let doner = newOrder;

                let addDoner = document.createElement("div");
                addDoner.classList.add("add-doner");

                let num = document.createElement("h2");
                num.innerText = i + 1;

                let name = document.createElement("h2");
                name.innerText = newOrder.name;

                let price = document.createElement("h2");
                price.innerText = newOrder.price;

                let inputCount = document.createElement("input");
                inputCount.type = "number"
                inputCount.placeholder = `${doner.counter}`;
                inputCount.classList.add("input");
                inputCount.value = doner.counter;

                // inputCount.addEventListener("input", function (e) {
                //     let inputNumber = e.target.value;
                //     doner.counter = inputNumber;
                //     superScript.innerText = "" + doner.counter;
                // })

                let buttonRemove = document.createElement("button");
                buttonRemove.innerText = "X";


                buttonRemove.addEventListener("click", function () {
                    donerManager.allDoners.splice(newOrder, 1);

                    if (donerArr.length === 0) {
                        emptyCard.style.display = "block";
                        orderButton.disabled = true;
                    }
                    router.handleHashChange();
                });

                totalSum += newOrder.price * doner.counter;
                // inputCount.addEventListener("input", function(e){
                //     let inputNumber = e.target.value;
                //     donerArr[i].price * inputNumber
                // })

                addDoner.append(num, name, price, inputCount, buttonRemove);
                div.appendChild(addDoner);
                orderButton.disabled = false;
            }

            sum.innerText = "Total sum is: " + totalSum.toFixed(2);
        }
    }

    return new OrderRender();
})()