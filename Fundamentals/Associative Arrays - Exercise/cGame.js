function cGame(arr) {

    let players = {};
    let cardValue = { 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10, J: 11, Q: 12, K: 13, A: 14 };
    let cardColor = { S: 4, H: 3, D: 2, C: 1 };

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

    let final = {};

    for (let [player, cards] of Object.entries(filtredValues)) {
        let hand = cards.split(' ');
        let total = 0;

        for (let card of hand) {
            if (card.length == 3) {
                total += cardValue[(Number(card[0] + card[1]))] * (Number(cardColor[card[2]]));
            }
            else {
                if (/^\d/.test(card)) {
                    total += cardValue[(Number(card[0]))] * (Number(cardColor[card[1]]));
                }
                else {
                    total += Number(cardValue[card[0]] * cardColor[card[1]]);
                }
            }
        }
        final[player] = total;
    }

    for (let [playerName, value] of Object.entries(final)) {
        console.log(`${playerName}: ${value}`);
    }
}

cGame([

    'Peter: 2C, 4H, 9H, AS, QS',

    'Tomas: 3H, 10S, JC, KD, 5S, 10S',

    'Andrea: QH, QC, QS, QD',

    'Tomas: 6H, 7S, KC, KD, 5S, 10C',

    'Andrea: QH, QC, JS, JD, JC',

    'Peter: JD, JD, JD, JD, JD, JD'

])