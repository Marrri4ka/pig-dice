var player1Turn = true;
var turnPoints = 0;
var player1 = new Player("dylan");
var player2 = new Player("mariia");


function Player(name){
  this.name=name,
  this.score=0
}

function winner(player){
    alert(player.name + " is the winner!")
}

function rollDice() {
  var currentRoll = Math.floor(Math.random() * 6) + 1;
  console.log("rollDice():  "+currentRoll)


  if (currentRoll == 1){
    turnPoints = 0;
    passTurn(turnPoints);
  }
  else if (currentRoll > 1){
    turnPoints += currentRoll;
    console.log("turnPoints: "+turnPoints)
  }
}



function passTurn(points) {

  if (player1Turn){
    player1.score+=points
    if (player1.score >= 100){
      winner(player1);
    }
  }
  else if(!player1Turn){
    player2.score+=points
    if (player2.score >= 100){
      winner(player2);
    }
  }

  turnPoints = 0;
  player1Turn = !player1Turn;
  if(player1Turn){
    console.log("Player 1's Turn")
  }
  if(!player1Turn){
    console.log("Player 2's Turn")
  }
}
$(document).ready(function(){
  $("#roll-button").click(function(){
    rollDice();

  });
  $("#pass-button").click(function(){
    passTurn(turnPoints);
  });



});
