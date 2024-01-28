function rectangle(num1, num2, str) {

    let col = str.charAt(0).toUpperCase() + str.slice(1);

    let obj = {
        width: num1,
        height: num2,
        color: col,
        calcArea(width, height) {
            return this.width * this.height;
        }
    }
    return obj;
}

let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());