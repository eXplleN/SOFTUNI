function nxnMatrix(int) {

    let buf = '';

    for (let i = 0; i < int; i++) {
        for (let j = 0; j < int; j++) {
            buf += `${int} `;
        }
        buf += `\n`;
    }
    console.log(buf);
}

nxnMatrix(3)
nxnMatrix(7)
nxnMatrix(2)