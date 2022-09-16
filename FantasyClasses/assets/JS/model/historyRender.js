let historyTable = (function(){

    let personAdress = document.getElementById("adress");

    class HistoryCard {


        historyCard(array, div) {

                for (let i = 0; i < array.length; i++) {

                    let lastOrder = document.createElement("tr");
                    lastOrder.classList.add("last-order");

                    let date = document.createElement("td");
                    date.innerText = new Date().toLocaleDateString();

                    let adress = document.createElement("td");
                    adress.innerText = personAdress.value;

                    let lastProduct = document.createElement("td");
                    lastProduct.innerText = array[i].name;

                    let lastTotalSum = document.createElement("td");
                    lastTotalSum.innerText = array[i].price * array[i].counter;

                    lastOrder.append(date, adress, lastProduct, lastTotalSum);
                    div.appendChild(lastOrder);
                }

            }

    }

    return new HistoryCard();

})()