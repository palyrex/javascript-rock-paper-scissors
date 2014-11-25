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

var pairs = {"rock" : ["scissors", "lizard"],
             "scissors" : ["paper", "lizard"],
             "paper" : ["rock", "spock"],
             "lizard" : ["paper", "spock"],
             "spock" : ["rock", "scissors"]}

Game.prototype.winner = function(){
  if (pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) return this.player1
  if (pairs[this.player2.pick].indexOf(this.player1.pick) > -1 ) return this.player2
  if (this.player1.pick == this.player2.pick) return null
};
