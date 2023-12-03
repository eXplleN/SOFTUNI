function easterEggs(arr) {

    let text = arr[0];
    let patern = /[@#]{1}(?<color>[a-z]{3,})[@#]\W*\/(?<amount>\d+)\//g
    let matched = text.match(patern);

    for (let i = 0; i < matched.length; i++) {
        let tokens = matched[i].split(patern);
        console.log(`You found ${tokens[2]} ${tokens[1]} eggs!`);
    }
}

easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/'])