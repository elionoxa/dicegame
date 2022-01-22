const imgOne = document.querySelector(".img1")
const imgTwo = document.querySelector(".img2")
const btn = document.querySelector(".btn")
const title = document.querySelector("h1");


btn.addEventListener("click", function randomImg () {

const randomNumber1 = Math.ceil(Math.random()*6);
const randomNumber2 = Math.ceil(Math.random()*6);

let imgOneSrc = ("images/dice" + randomNumber1 + ".png");
let imgTwoSrc = ("images/dice" + randomNumber2 + ".png");

imgOne.src = imgOneSrc
imgTwo.src = imgTwoSrc

if (imgOneSrc === imgTwoSrc) {
title.textContent = 'Draw!';
} else {
title.textContent = 'Refresh Me';
}

if (randomNumber1 > randomNumber2) {
  title.textContent = '️🏳️Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
  title.textContent = 'Player 2 Wins!🏳️';
}

});

randomImg();
