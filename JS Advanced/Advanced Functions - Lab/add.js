
function solution(startNum) {

    function numAdder(numToAdd) {
        return result = startNum + numToAdd;
    }
    return numAdder;
}
let add5 = solution(5)
console.log(add5(2));
console.log(add5(3));