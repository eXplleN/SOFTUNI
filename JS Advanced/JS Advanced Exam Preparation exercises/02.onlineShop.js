class OnlineShop {

    warehouseSpace;
    products;
    sales;

    constructor(warehouseSpace) {
        this.warehouseSpace = Number(warehouseSpace);
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        spaceRequired = Number(spaceRequired);
        quantity = Number(quantity)

        if (this.warehouseSpace <= Number(spaceRequired)) {
            throw new Error("Not enough space in the warehouse.");
        }
        else {
            this.products.push({[product]: Number(quantity)});
            this.warehouseSpace -= Number(spaceRequired);
            return `The ${product} has been successfully delivered in the warehouse.`;
        }
    }

    quantityCheck(product, minimalQuantity) {
        minimalQuantity = Number(minimalQuantity);
        
       
        let searchedProduct = this.products.find(item => Object.keys(item)[0] === product);
    
        if (!searchedProduct) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }
        if (searchedProduct[product] >= minimalQuantity ) {
           return `You have enough from product ${product}.`;
        }
        else {
            let difference = minimalQuantity - searchedProduct[product];
            searchedProduct[product] = minimalQuantity;
            this.warehouseSpace -= difference;
            return `You added ${difference} more from the ${product} products.`
        }
    }

    sellProduct(product) {
        let searchedProduct = this.products.find(item => Object.keys(item)[0] === product);
        if (!searchedProduct) {
            throw new Error (`There is no ${product} in the warehouse.`);
        }
        else {
            searchedProduct[product]--;
            this.sales.push({[product]: 1});
            return `The ${product} has been successfully sold.`;
        }
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        }
        let totalSales = this.sales.length;
        let info = `You sold ${totalSales} products today!\nProducts in the warehouse:\n`;

        this.products.forEach(item => {
            let productName = Object.keys(item)[0];
            let quantity = item[productName];
            info += `${productName}-${quantity} more left\n`;
        });

        return info.trim();
    }
}

const myOnlineShop = new OnlineShop(500)

console.log(myOnlineShop.loadingStore('headphones', 10, 200));

console.log(myOnlineShop.loadingStore('laptop', 5, 200));

console.log(myOnlineShop.quantityCheck('headphones', 10));

console.log(myOnlineShop.quantityCheck('laptop', 10));

console.log(myOnlineShop.sellProduct('headphones'));

console.log(myOnlineShop.sellProduct('laptop'));

console.log(myOnlineShop.revision());