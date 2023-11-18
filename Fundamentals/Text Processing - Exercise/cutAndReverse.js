function cutAndReverse(str) {

    let splited = [];

    let middle = Math.ceil(str.length / 2);
    let firsPart = str.slice(0, middle);
    let secondPart = str.slice(middle);

    splited.push(firsPart, secondPart);

    let result = [];

    for (let current of splited) {
        let reversed = '';
        for (let i = current.length - 1; i >= 0; i--) {
            let char = current[i];
            reversed += char;
        }
        result.push(reversed);
    }
    console.log(result.join('\n'));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT')