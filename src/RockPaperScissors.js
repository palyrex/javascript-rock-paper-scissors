function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

function Game(player1, player2) {
  this.player1 = player1;
  this.player2 = player2;
};

Game.prototype.winner = function () {
  if (this.player1.pick === this.player2.pick) return null
  if (this.player1.pick === 'rock' && this.player2.pick === 'scissors') return this.player1;
  if (this.player1.pick === 'scissors' && this.player2.pick === 'paper') return this.player1;
  if (this.player1.pick === 'paper' && this.player2.pick === 'rock') return this.player1;
  if (this.player2.pick === 'rock' && this.player1.pick === 'scissors') return this.player2;
  if (this.player2.pick === 'scissors' && this.player1.pick === 'paper') return this.player2;
  if (this.player2.pick === 'paper' && this.player1.pick === 'rock') return this.player2;
};
