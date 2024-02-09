function Adder(initialSum = 0) {
    let sum = initialSum;

    function add(num) {
        sum += num;
        return add;
    }

    add.toString = function() {
        return sum;
    };

    return add;
}
