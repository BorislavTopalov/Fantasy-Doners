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
    class History {

        constructor(date, adress, order, price) {
            this.date = date;
            this.adress = adress;
            this.order = order;
            this.price = price;
        }
    }


    class ProductManager {

        constructor() {
            this.allDoners = [];
            this.orderArr = [];
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


    // class Order {

    //     constructor(num, name, price, input, remove) {
    //         this.num = num;
    //         this.name = name;
    //         this.price = price;
    //         this.input = input;
    //         this.remove = remove;

    //     }
    // }

    

    // class Delivery{

    //     constructor(name, phone, adress, button){
    //         this.name = name;
    //         this.phone = phone;
    //         this.adress = adress;
    //         this.button = button;

    //     }
    // }
