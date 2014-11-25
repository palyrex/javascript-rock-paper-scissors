describe("RockPaperScissors", function() {
  describe('winning and losing', function() {

    var player1, player2, game

    beforeEach(function() {
      player1 = new Player("Pavel");
      player2 = new Player("Alan");
      game = new Game(player1, player2);
    });

    describe('rock', function() {
      it('should beat scissors', function() {
        player1.pick("rock");
        player2.pick("scissors");
        expect(game.winner()).toBe(player1);
      });
    });

    describe('rock', function() {
      it('should lose to paper', function() {
        player1.pick("rock");
        player2.pick("paper");
        expect(game.winner()).toBe(player2);
      });
    });

  });
});
