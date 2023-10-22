function deckOfCards(arr) {

    let listOfCards = arr.shift().split(', ');
    let randomNum = Number(arr.shift());

    for (let i = 0; i < arr.length; i++) {
        let currentStep = arr[i].split(', ');
        let command = currentStep.shift();

        if (command == 'Add') {
            let card = currentStep[0];
            let check = listOfCards.includes(card);

            if (check == false) {
                listOfCards.push(card);
                console.log(`Card successfully added`);
            }
            else {
                console.log(`Card is already in the deck`);
            }
        }
        else if (command == 'Remove') {
            let card = currentStep[0];
            let check = listOfCards.indexOf(card);

            if (check != -1) {
                listOfCards.splice(check, 1);
                console.log(`Card successfully removed`);
            }
            else {
                console.log(`Card not found`);
            }
        }
        else if (command == 'Remove At') {
            let index = Number(currentStep[0]);

            if (index >= 0 && index < listOfCards.length) {
                listOfCards.splice(index, 1);
                console.log(`Card successfully removed`);
            }
            else {
                console.log(`Index out of range`);
            }
        }
        else {
            let index = Number(currentStep[0]);
            let card = currentStep[1];

            if (index >= 0 && index < listOfCards.length) {
                let check = listOfCards.includes(card);
                if (check == true) {
                    console.log(`Card is already added`);
                }
                else {
                    listOfCards.splice(index, 0, card);
                    console.log(`Card successfully added`);
                }
            }
            else {
                console.log(`Index out of range`);
            }
        }
    }
    console.log(listOfCards.join(', '));
}

deckOfCards(["Ace of Diamonds, Queen of Hearts, King of Clubs", "3", "Add, King of Diamonds", "Insert, 2, Jack of Spades", "Remove, Ace of Diamonds"])
//deckOfCards(["Two of Clubs, King of Spades, Five of Spades, Jack of Hearts", "2", "Add, Two of Clubs", "Remove, Five of Hearts"])
//deckOfCards(["Jack of Spades, Ace of Clubs, Jack of Clubs", "2", "Insert, -1, Queen of Spades", "Remove At, 1"])