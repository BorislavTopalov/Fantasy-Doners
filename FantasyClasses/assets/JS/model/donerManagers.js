let donerManager = (function () {

    class Doner {

        constructor(image, name, weight, category, price) {
            this.imageUrl = image;
            this.name = name;
            this.weight = weight;
            this.category = category;
            this.price = price;
            this.counter = 0;
        }
    }

    class ProductManager {

        constructor() {
            this.allDoners = [];
            this.orderArr = [];
            this.historyArr = [];
        }

        addDoner(doner) {
            this.allDoners.push(doner)
        }

        getAllDoners(data) {
            data.forEach(doner => {
                this.addDoner(new Doner(doner.image, doner.name, doner.weight, doner.category, doner.price))
            });
        }

        
    }

    return new ProductManager();
})()
