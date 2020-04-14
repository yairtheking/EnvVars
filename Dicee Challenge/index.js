var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randonImageSource = "images/" + randomDiceImage;

document.querySelectorAll("img")[0].setAttribute("src", randonImageSource);

var randomNumber2 = Math.floor(Math.random()*6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randonImageSource2= "images/" + randomDiceImage2;

document.querySelectorAll("img")[1].setAttribute("src", randonImageSource2);

if (randomNumber1 === randomNumber2) {
  document.querySelector("h1").innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!"
}
else {
  document.querySelector("h1").innerHTML = "Player 2 Wins!"
}
