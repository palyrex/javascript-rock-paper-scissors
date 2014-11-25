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

var pairs = {"rock"     : ["scissors", "lizard" ],
             "scissors" : ["paper", "lizard"    ],
             "paper"    : ["rock", "spock"      ],
             "lizard"   : ["paper", "spock"     ],
             "spock"    : ["rock", "scissors"   ]}

Game.prototype.winner = function(){
  if (pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) return this.player1
  if (pairs[this.player2.pick].indexOf(this.player1.pick) > -1 ) return this.player2
  if (this.player1.pick == this.player2.pick) return null
};

Game.prototype.loser = function(){
  if (pairs[this.player1.pick].indexOf(this.player2.pick) > -1 ) return this.player2
  if (pairs[this.player2.pick].indexOf(this.player1.pick) > -1 ) return this.player1
  if (this.player1.pick == this.player2.pick) return null
};

Game.prototype.message = function() {
if (this.winner() === null) return "That's a DRAW"
verbs = {  "paper"    : ["covers","rock"        ],
           "rock"     : ["crushes", "lizard"    ],
           "lizard"   : ["poisons", "spock"     ], 
           "spock"    : ["smashes", "scissors"  ],
           "scissors" : ["cuts", "paper"        ],
           "paper"    : ["disproves", "spock"   ],
           "lizard"   : ["eats", "paper"        ],
           "paper"    : ["disproves", "spock"   ],
           "spock"    : ["vaporises", "rock"    ],
           "rock"     : ["crushes", "scissors"  ]}
if (verbs[this.winner().pick].indexOf(this.loser().pick) > -1) verb = verbs[this.winner().pick][0];
return (this.winner().name + "'s " + this.winner().pick + " " + verb + " " + this.loser().name + "'s " + this.loser().pick);

};
