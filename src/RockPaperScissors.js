function Player(name) {
  this.name = name;
};

Player.prototype.pick = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

var winningCombinations = {rock : "scissors", "scissors" : "paper", "paper" : "rock"}

Game.prototype.winner = function(){
  if (winningCombinations[this.player1.pick] == this.player2.pick) return this.player1
  if (winningCombinations[this.player2.pick] == this.player1.pick) return this.player2
  if (this.player1.pick == this.player2.pick) return null
};
