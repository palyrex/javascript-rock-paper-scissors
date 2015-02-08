describe('Rock Paper Scissors', function() {
  var player1, player2, game;

  beforeEach(function() {
    player1 = new Player('Pavel');
    player2 = new Player('Alan');
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {
      it('should crush scissors', function() {
        player1.picks('rock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1);
      });
      it('should crush lizard', function() {
        player1.picks('rock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });
      it('should be covered by paper', function() {
        player1.picks('rock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2);
      });
      it('should be vaporised by spock', function() {
        player1.picks('rock');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function () {
      it('should cut paper', function() {
        player1.picks('scissors');
        player2.picks('paper');
        expect(game.winner()).toBe(player1);
      });
      it('should decapitate lizard', function() {
        player1.picks('scissors');
        player2.picks('lizard');
        expect(game.winner()).toBe(player1);
      });
      it('should be crushed by rock', function() {
        player1.picks('scissors');
        player2.picks('rock');
        expect(game.winner()).toBe(player2);
      });
      it('should be smashed by spock', function() {
        player1.picks('scissors');
        player2.picks('spock');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function () {
      it('should cover rock', function() {
        player1.picks('paper');
        player2.picks('rock');
        expect(game.winner()).toBe(player1);
      });
      it('should disprove spock', function() {
        player1.picks('paper');
        player2.picks('spock');
        expect(game.winner()).toBe(player1);
      });
      it('should be cut by scissors', function() {
        player1.picks('paper');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2);
      });
      it('should be eaten by lizard', function() {
        player1.picks('paper');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2);
      });
    });

    describe('lizard', function() {
      it('should eat paper', function() {
        player1.picks('lizard');
        player2.picks('paper');
        expect(game.winner()).toBe(player1)
      });
      it('should poison spock', function() {
        player1.picks('lizard');
        player2.picks('spock');
        expect(game.winner()).toBe(player1)
      });
      it('should be crushed by rock', function() {
        player1.picks('lizard');
        player2.picks('rock');
        expect(game.winner()).toBe(player2)
      });
      it('should by decapitated by scissors', function() {
        player1.picks('lizard');
        player2.picks('scissors');
        expect(game.winner()).toBe(player2)
      });
    });

    describe('spock', function() {
      it('should crush scissors', function() {
        player1.picks('spock');
        player2.picks('scissors');
        expect(game.winner()).toBe(player1)
      });
      it('should vaporise rock', function() {
        player1.picks('spock');
        player2.picks('rock');
        expect(game.winner()).toBe(player1)
      });
      it('should be poisoned by lizard', function() {
        player1.picks('spock');
        player2.picks('lizard');
        expect(game.winner()).toBe(player2)
      });
      it('should be disproved by paper', function() {
        player1.picks('spock');
        player2.picks('paper');
        expect(game.winner()).toBe(player2)
      });
    });
  });

  describe('drawing', function() {
    it('matching values should produe a tie', function() {
      player1.picks('paper');
      player2.picks('paper');
      expect(game.winner()).toBe(null);
    });
  });

  describe('print out winner and loser names', function() {
    it('should display winner name', function() {
      player1.picks('rock');
      player2.picks('spock');
      expect(game.winningMessage()).toBe("Alan\'s spock vaporises Pavel\'s rock")
    });

    it('should display loser name', function() {
      player1.picks('lizard');
      player2.picks('paper');
      expect(game.winningMessage()).toBe("Pavel\'s lizard eats Alan\'s paper")
    });
  });

  describe('says draw if players choose same picks', function() {
    it('should print "That\'s a DRAW"', function() {
      player1.picks('paper');
      player2.picks('paper');
      expect(game.winningMessage()).toBe('Draw')
    });
  });
});
