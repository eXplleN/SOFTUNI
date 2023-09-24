function repainting(input) {

    let nl = Number(input[0]) + 2;
    let nl1 = nl * 1.50;
    let paint = Number(input[1]);
    let p2 = paint + (paint * 0.1);
    let p1 = p2 * 14.50;
    let rz = Number(input[2]) * 5;
    let tr = 0.40;
    let hours = Number(input[3]);

    let overall = nl1 + p1 + rz + tr;
    let workers = (overall * 0.3) * hours;
    let result = overall + workers;

    console.log(result);
    



}

repainting(["5","10","10","1"]);  