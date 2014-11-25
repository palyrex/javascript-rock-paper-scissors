describe("RockPaperScissors", function() {
  var player1, player2, game

  beforeEach(function() {
    player1 = new Player("Pavel");
    player2 = new Player("Alan");
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {
      it('should crush scissors', function() {
        player1.pick("rock");
        player2.pick("scissors");
        expect(game.winner()).toBe(player1);
      });
      it('should crush lizard', function() {
        player1.pick("rock");
        player2.pick("lizard");
        expect(game.winner()).toBe(player1);
      });
      it('should be covered by paper', function() {
        player1.pick("rock");
        player2.pick("paper");
        expect(game.winner()).toBe(player2);
      });
      it('should be vaporised by spock', function() {
        player1.pick("rock");
        player2.pick("spock");
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function () {
      it('should cut paper', function() {
        player1.pick("scissors");
        player2.pick("paper");
        expect(game.winner()).toBe(player1);
      });
      it('should decapitate lizard', function() {
        player1.pick("scissors");
        player2.pick("lizard");
        expect(game.winner()).toBe(player1);
      });
      it('should be crushed by rock', function() {
        player1.pick("scissors");
        player2.pick("rock");
        expect(game.winner()).toBe(player2);
      });
      it('should be smashed by spock', function() {
        player1.pick("scissors");
        player2.pick("spock");
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function () {
      it('should cover rock', function() {
        player1.pick("paper");
        player2.pick("rock");
        expect(game.winner()).toBe(player1);
      });
      it('should disprove spock', function() {
        player1.pick("paper");
        player2.pick("spock");
        expect(game.winner()).toBe(player1);
      });
      it('should be cut by scissors', function() {
        player1.pick("paper");
        player2.pick("scissors");
        expect(game.winner()).toBe(player2);
      });
      it('should be eaten by lizard', function() {
        player1.pick("paper");
        player2.pick("lizard");
        expect(game.winner()).toBe(player2);
      });
    });

    describe('lizard', function() {
      it('should eat paper', function() {
        player1.pick("lizard");
        player2.pick("paper");
        expect(game.winner()).toBe(player1)
      });
      it('should poison spock', function() {
        player1.pick("lizard");
        player2.pick("spock");
        expect(game.winner()).toBe(player1)
      });
      it('should be crushed by rock', function() {
        player1.pick("lizard");
        player2.pick("rock");
        expect(game.winner()).toBe(player2)
      });
      it('should by decapitated by scissors', function() {
        player1.pick("lizard");
        player2.pick("scissors");
        expect(game.winner()).toBe(player2)
      });
    });

    describe('spock', function() {
      it('should crush scissors', function() {
        player1.pick("spock");
        player2.pick("scissors");
        expect(game.winner()).toBe(player1)
      });
      it('should vaporise rock', function() {
        player1.pick("spock");
        player2.pick("rock");
        expect(game.winner()).toBe(player1)
      });
      it('should be poisoned by lizard', function() {
        player1.pick("spock");
        player2.pick("lizard");
        expect(game.winner()).toBe(player2)
      });
      it('should be disproved by paper', function() {
        player1.pick("spock");
        player2.pick("paper");
        expect(game.winner()).toBe(player2)
      });
    });
});

  describe('drawing', function() {
    it('matching values should produe a tie', function() {
      player1.pick("paper");
      player2.pick("paper");
      expect(game.winner()).toBe(null);
    });
  }); 

  describe('print out winner and loser names', function() {
    it('should display winner name', function() {
      player1.pick("rock");
      player2.pick("spock");
      expect(game.message()).toBe("Alan's spock vaporises Pavel's rock")
    });

    it('should display loser name', function() {
      player1.pick("lizard");
      player2.pick("paper");
      expect(game.message()).toBe("Pavel's lizard eats Alan's paper")
    });
  });

  describe('says draw if players choose same pick', function() {
    it('should print "That\'s a DRAW"', function() {
      player1.pick("paper");
      player2.pick("paper");
      expect(game.message()).toBe("That's a DRAW")
    });
  });

  describe('the computer should pick a value', function() {
    it('should make a random choice', function() {
      bot = new Bot();
      available_choices = ["rock", "paper", "scissors", "lizard", "spock"];
      expect(available_choices).toContain(bot.pick());
    });
  });  

});
