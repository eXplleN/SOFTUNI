function addAndSubtract(int1, int2, int3) {

    function sum(int1, int2) {
        let add = int1 + int2;
        return add;
    }

    function subtract(sum, int3) {
        let sub = sum - int3;
        return sub;
    }
    console.log(subtract(sum(int1,int2),int3));
}


addAndSubtract(23, 6, 10)
addAndSubtract(1, 17, 30)
addAndSubtract(42, 58, 100)