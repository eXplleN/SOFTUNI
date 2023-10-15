function sortAnArrayBy2Criteria(arr) {

    function lengthCompare(a, b) {

        let lengthComp = a.length - b.length;

        if (lengthComp == 0) {
            return a.localeCompare(b);
        }
        return lengthComp;
    }

    arr.sort(lengthCompare);

    console.log(arr.join('\n'));

}

sortAnArrayBy2Criteria(['alpha', 'beta', 'gamma'])
sortAnArrayBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])