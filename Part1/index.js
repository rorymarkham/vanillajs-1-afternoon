
const board = [];

function play(clickedId) {
   let playerSpan = document.getElementById('player')
   const clickedElement = document.getElementById(clickedId)
   if (playerSpan.innerText === 'X') {
       playerSpan.innerText = 'O'
       clickedElement.innerText = 'X'
       board[clickedId] = 'X'
   } else {
       playerSpan.innerText = 'X'
       clickedElement.innerText ='O'
       board[clickedId] = 'O'
   }

const topLeft = board[0]
const topMiddle = board[1]
const topRight = board[2]
const midLeft = board[3]
const midMiddle = board[4]
const midRight = board[5]
const botLeft = board[6]
const botMiddle = board[7]
const botRight = board[8]

if (botLeft !== undefined && botLeft === midMiddle && botLeft === topRight) {
   alert(`${botLeft} is the winner!`);
}
if (topLeft !== undefined && topLeft === midMiddle && topLeft === botRight) {
   alert(`${topLeft} is the winner!`);
}
if (topRight !== undefined && topRight === midRight && topRight === botRight) {
   alert(`${topRight} is the winner!`);
}
if (topMiddle !== undefined && topMiddle === midMiddle && topMiddle === botMiddle) {
   alert(`${topMiddle} is the winner!`);
}
if (topLeft !== undefined && topLeft === midLeft && topLeft === botLeft) {
   alert(`${topLeft} is the winner!`);
}
if (botLeft !== undefined && botLeft === botLeft && botMiddle === botLeft) {
   alert(`${botLeft} is the winner!`);
}
if (midLeft !== undefined && midLeft === midMiddle && midLeft === midRight) {
   alert(`${midLeft} is the winner!`);
}
if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
   alert(`${topLeft} is the winner!`);

}

let boardFull = true;
for (let i =0; i <= 8; i++) {
   if (board[i] === undefined) {
       boardFull = false;
   }
   }
   if (boardFull === true) {
       alert("Cat's game, you both suck");
   }
}
