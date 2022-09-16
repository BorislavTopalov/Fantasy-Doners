(function(){

    let search = document.getElementById("filter-field");
    let allProducts = document.getElementById("all-menues");

    search.addEventListener("input", function (event) {
        let text = event.target.value;
        let filtered = filter(text);
        cardRender.donerCard(filtered, allProducts);

    })

    function filter(text) {
        if (typeof (text) === "string" && text.trim().length > 0) {
            let filtered = [];
            text = text.toLowerCase();
            for (let i = 0; i < donerManager.allDoners.length; i++) {
                let product = donerManager.allDoners[i];
                if (product.name.toLowerCase().includes(text)) {
                    filtered.push(product);
                }
            }
            return filtered;
        } else {
            return donerManager.allDoners;
        }

    }

})()