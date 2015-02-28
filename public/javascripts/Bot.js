function Bot(name) {
  this.name = name;
}

Bot.prototype.picks = function() {
  if(this.PlayersLargestCount() < 3) {
    this.pick = this.NormalChoice();
  } else {
    this.pick = this.AIweapon();
  }
};

Bot.prototype.NormalChoice = function() {
  available_choices = ["rock", "paper", "scissors", "lizard", "spock"];
  choice_index = Math.floor(Math.random()*5);
  this.choice = available_choices[choice_index];
  return this.choice;
};

var playerPicks = {"rock" : 0, "scissors" : 0, "paper" : 0, "lizard" : 0, "spock" : 0};

Bot.prototype.TracingPlayerChoice = function(weapon) {
  playerPicks[weapon] ++;
};


Bot.prototype.PlayersLargestCount = function() {
  var countUserChoices = [];
  for (var weapon in playerPicks) {
      countUserChoices.push(playerPicks[weapon]);
  }
  return Math.max.apply(Math, countUserChoices);
};

Bot.prototype.AIweapon = function() {
  var botChoices =  { rock:     ["spock", "paper"    ],
                      paper:    ["scissors", "lizard"],
                      scissors: ["rock", "spock"     ],
                      lizard:   ["scissors", "rock"  ],
                      spock:    ["paper", "lizard"   ]};
  var choice;
  for (var key in playerPicks) {
      if(playerPicks[key] === this.PlayersLargestCount()) {
        choice = key;
      }
  }
  return botChoices[choice][Math.floor(Math.random()*2)];
};
