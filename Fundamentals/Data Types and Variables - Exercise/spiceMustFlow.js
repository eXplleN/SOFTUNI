function spiceMustFlow(yield) {

    let days = 0;
    let spice = 0;

    for (let i = yield; i >= 100; i -= 10) {
        days++;
        spice += (i - 26);
    }
    if (spice >= 26) {
        spice -= 26;
    }
    else {
        spice = spice;
    }
    console.log(days);
    console.log(spice);
}

spiceMustFlow(111)
spiceMustFlow(450)