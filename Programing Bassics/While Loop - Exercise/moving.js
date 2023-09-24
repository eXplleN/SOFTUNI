function moving(input) {

    let width = Number(input[0]);
    let length = Number(input[1]);
    let higth = Number(input[2]);

    let appartmentSpace = width * length * higth;
    let boxSpace = 0;
    let command = "";
    let totalBoxSpace = 0;

    let index = 3;

    while (true) {
        command = input[index];
        if (command === "Done") {
            if (appartmentSpace > boxSpace) {
                console.log(`${appartmentSpace - totalBoxSpace} Cubic meters left.`);
                break;
            }
        }
        boxSpace = Number(input[index]);
        totalBoxSpace += boxSpace;
        index++;
        if (totalBoxSpace >= appartmentSpace) {
            console.log(`No more free space! You need ${totalBoxSpace - appartmentSpace} Cubic meters more.`);
            break;
        }
    }

}
moving(["10", "1", "2", "4", "6", "Done"]);