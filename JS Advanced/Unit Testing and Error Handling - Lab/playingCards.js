function playingCards(face, suit) {

   let cardFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
   let cardSuits = {"S": "\u2660", "H": "\u2665", "D": "\u2666", "C": "\u2663"};

   if (!cardFaces.includes(face)) {
    throw new Error("Invalid card");
   }

   let obj = {face: face, suit: cardSuits[suit]};
    obj.toString = function () {
    return this.face + this.suit;
   };

   return obj.toString();
}

console.log(playingCards('A', 'S'))