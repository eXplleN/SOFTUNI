class List {
    constructor() {
        this.items = [];
        this.size = 0;
    }

    add(num) {
        this.items.push(num);
        this.size ++; 
        return this.items.sort((a, b) => a - b);
    }

    remove(num) {
        if (num >= 0 && num < this.size) { 
            let removedItem = this.items.splice(num, 1)[0];
            this.size--; 
            return removedItem;
        }
    }

    get(num) {
        if (num >= 0 && num < this.size) { 
            return this.items[num];
        } else {
            return undefined; 
        }
    }
}

let list = new List();

list.add(5);

list.add(6);

list.add(7);

console.log(list.get(1));

list.remove(1);

console.log(list.get(1));