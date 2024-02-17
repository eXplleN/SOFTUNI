class WineSelection {
    space;
    wines;
    bill;

    constructor(space) {
        this.space = Number(space);
        this.wines = [];
        this.bill = 0;
    }

    reserveABottle (wineName, wineType, price) {
        if (this.wines.length >= this.space) {
            throw new Error("Not enough space in the cellar.");
        }
        else {
            let newWine = {
                wineName: wineName,
                wineType: wineType,
                price: Number(price),
                paid: false
            };
            this.wines.push(newWine);
            return `You reserved a bottle of ${wineName} ${wineType} wine.`
        }
    }

    payWineBottle( wineName, price ) {
        let search = this.wines.find(wine => wine.wineName === wineName);

        if (!search) {
            throw new Error(`${wineName} is not in the cellar.`);
        }

        if (search.paid === true) {
            throw new Error(`${wineName} has already been paid.`);
        }

        search.paid = true;
        this.bill += Number(price);
        return `You bought a ${wineName} for a ${price}$.`;
    }

    openBottle(wineName) {
        let lookingForWine = this.wines.find(wine => wine.wineName === wineName);

        if (!lookingForWine) {
            throw new Error(`The wine, you're looking for, is not found.`)
        }
        if (lookingForWine.paid === false) {
           throw new Error(`${wineName} need to be paid before open the bottle.`);
        }

       let index = this.wines.findIndex(wine => wine.wineName === wineName);

       this.wines.splice(index, 1)[0];

       return `You drank a bottle of ${wineName}.`
    }

    cellarRevision(wineType) {
        if (!wineType) {
            let emptySlots = this.space - this.wines.length;
            let paidWineBill = this.wines.reduce((acc, curr) => acc + (curr.paid ? curr.price : 0), 0);
            let info = `You have space for ${emptySlots} bottles more.\n`;
            info += `You paid ${paidWineBill}$ for the wine.\n`;
        
            this.wines.sort((a, b) => a.wineName.localeCompare(b.wineName));
            info += this.wines.map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`).join('\n');
            return info;
        }
        else {
            let winesOfType = this.wines.filter(wine => wine.wineType === wineType);
            if (winesOfType.length === 0) {
                throw new Error(`There is no ${wineType} in the cellar.`);
            }
            
            winesOfType.sort((a, b) => a.wineName.localeCompare(b.wineName));
            return winesOfType.map(wine => `${wine.wineName} > ${wine.wineType} - ${wine.paid ? 'Has Paid' : 'Not Paid'}.`).join('\n');
        }
    }
}

const selection = new WineSelection(2)

console.log(selection.reserveABottle('Sauvignon Blanc Marlborough',

'White', 50));

console.log(selection.reserveABottle('Cabernet Sauvignon Napa Valley',

'Red', 120));

console.log(selection.reserveABottle('Bodegas Godelia Mencía', 'Rose',

144));