describe("RockPaperScissors", function() {
  var player1, player2, game

  beforeEach(function() {
    player1 = new Player("Pavel");
    player2 = new Player("Alan");
    game = new Game(player1, player2);
  });

  describe('winning and losing', function() {

    describe('rock', function() {
      it('should beat scissors', function() {
        player1.pick("rock");
        player2.pick("scissors");
        expect(game.winner()).toBe(player1);
      });

      it('should lose to paper', function() {
        player1.pick("rock");
        player2.pick("paper");
        expect(game.winner()).toBe(player2);
      });
    });

    describe('scissors', function () {
      it('should beat paper', function() {
        player1.pick("scissors");
        player2.pick("paper");
        expect(game.winner()).toBe(player1);
      });

      it('should lose to rock', function() {
        player1.pick("scissors");
        player2.pick("rock");
        expect(game.winner()).toBe(player2);
      });
    });

    describe('paper', function () {
      it('should beat rock', function() {
        player1.pick("paper");
        player2.pick("rock");
        expect(game.winner()).toBe(player1);
      });

      it('should lose to scissors', function() {
        player1.pick("paper");
        player2.pick("scissors");
        expect(game.winner()).toBe(player2);
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

});
