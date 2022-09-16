let cardRender = (function () {

    let superScript = document.getElementById("super-script");

    class Render {

        donerCard(doners, div) {
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
                inputButton.addEventListener("input", function (e) {
                    let inputNumber = e.target.value;

                    doner.counter = Number(inputNumber);
                    if (doner.counter > 0) {
                        addButton.disabled = false;
                    } else {
                        addButton.disabled = true;
                    }


                })

                let emptyCard = document.getElementById("empty-card");

                let addButton = document.createElement("button");
                addButton.innerText = "add to card";
                addButton.disabled = true;


                addButton.addEventListener("click", function () {

                    donerManager.orderArr.push(doner);

                    superScript.innerText = "" + donerManager.orderArr.length * doner.counter;
                    console.log(donerManager.orderArr);

                    emptyCard.style.display = "none";
                    router.handleHashChange();

                })

                donerContainer.append(image, name, weight, category, price, inputButton, addButton);
                div.appendChild(donerContainer);

            }
        }
    }

    return new Render();

})()