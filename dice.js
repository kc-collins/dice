//we've got 3 dice
let dice1;
let dice2;
let dice3;

function rollDice(){
    //a random number is generated times the number of sides on the dice (between 1 and 7)
    dice1 = Math.floor(Math.random() * 6) + 1;
    dice2 = Math.floor(Math.random() * 6) + 1;
    dice3 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "dice1" + dice1 + ".png");
    document.querySelector(".img2").setAttribute("src", "dice2" + dice2 + ".png");
    document.querySelector(".img3").setAttribute("src", "dice3" + dice3 + ".png");
    
    console.log(dice1, dice2, dice3);
}

var button = document.getElementById('button');

button.onclick = function() {
  rollDice();
};
