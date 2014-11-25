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

var winningCombinations = {"rock" : ["scissors", "lizard"],
                           "scissors" : ["paper", "lizard"],
                           "paper" : ["rock", "spock"],
                           "lizard" : ["paper", "spock"],
                           "spock" : ["rock", "scissors"]}

Game.prototype.winner = function(){
  player1pick = winningCombinations[this.player1.pick]
  player2pick = winningCombinations[this.player2.pick]
  if (((player1pick[0] == this.player2.pick) || (player1pick[1]) == this.player2.pick)) return this.player1
  if (((player2pick[0] == this.player1.pick) || (player2pick[1]) == this.player1.pick)) return this.player2
  if (this.player1.pick == this.player2.pick) return null
};
