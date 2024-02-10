function printDeckOfCards(cards) {
    function createCard(face, suit) {
        let cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
        let cardSuits = { "S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663" };

        if (!cardFaces.includes(face) || !cardSuits[suit]) {
            throw new Error(`Invalid card: ${face}${suit}`);
        }

        return `${face}${cardSuits[suit]}`;
    }

    let printedCards = [];
    try {
        for (let card of cards) {
            const face = card.slice(0, -1);
            const suit = card.slice(-1);
            printedCards.push(createCard(face, suit));
        }
    } catch (error) {
        console.log(error.message);
        return;
    }
    console.log(printedCards.join(" "));
}

printDeckOfCards(['AS', '10D', 'KH', '2C'])