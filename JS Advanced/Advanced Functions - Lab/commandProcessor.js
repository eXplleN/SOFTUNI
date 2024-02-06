function solution() {
    
    let result = "";

    let firstZeroTest = {
        append(str) {
             result += str;
        },

        removeStart(num) {
            result = result.slice(num, result.length);
        },

        removeEnd(num) {
             result = result.slice(0, -num);
        },
    
        print() {
            console.log(result);
        }
    }
    return firstZeroTest
}


let firstZeroTest = solution();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print()