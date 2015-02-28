function Player(name) {
  this.name = name;
}

Player.prototype.picks = function(pick) {
  this.pick = pick;
};

Player.prototype.setName = function(newname) {
  this.name = newname;
};
