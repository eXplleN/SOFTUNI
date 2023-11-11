function cGame(arr) {

    let players = {};

    for (let cPlayer of arr) {
        let current = cPlayer.split(': ');
        let name = current[0];
        let value = current[1].split(', ');

        if (!(name in players)) {
           players[name] = value;
        }
        else {
           players[name] = players[name].concat(value);
        }
    }

    let filtredValues = {};
    
    for (let [name, cards] of Object.entries(players)) {
        filtredValues[name] = [...new Set(cards)].join(' ');
    }
    console.log(filtredValues);
}

cGame([

    'Peter: 2C, 4H, 9H, AS, QS',
    
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    
    'Andrea: QH, QC, QS, QD',
    
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    
    'Andrea: QH, QC, JS, JD, JC',
    
    'Peter: JD, JD, JD, JD, JD, JD'
    
    ])