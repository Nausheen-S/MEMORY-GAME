console.log("Up and running!");
let cards = ["queen","queen","king","king"];
let cardsInPlay = [];
let cardId;
function checkForMatch(){
	if (cardsInPlay[2] === cardsInPlay[3]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
}
function flipCard(cardId) {
	console.log("user flipped" + " " + cards[cardId]);
	cardsInPlay.push(cards[cardId]);
if(cardsInPlay.length === 2){
	checkForMatch();
}
}
flipCard(0);
flipCard(2);