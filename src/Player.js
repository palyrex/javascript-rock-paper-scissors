function Bot(name) {
  this.name = name;
};

Bot.prototype.picks = function() {
  available_choices = ["rock", "paper", "scissors", "lizard", "spock"];
  choice_index = Math.floor(Math.random()*5)
  this.pick = available_choices[choice_index];
  return this.pick;
};

function Player(name) {
  this.name = name;
};

Player.prototype.picks = function(pick) {
  this.pick = pick;
};
