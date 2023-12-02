function destinationMapper(str) {

    let patern = /([=|\/])(?<town1>[A-Z][A-Za-z]{2,})\1/g;
    let matched = str.match(patern);
    let points = 0;
    let trimed = [];

    if (matched != null){
        for (let i = 0; i < matched.length; i++) {
            points += matched[i].length - 2;
            let current = matched[i];
            let cuted = matched[i].split(current[0]);
            trimed.push(cuted[1]);
        }
    }
    console.log(`Destinations: ${trimed.join(', ').trim()}`)
    console.log(`Travel Points: ${points}`);
}

destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")