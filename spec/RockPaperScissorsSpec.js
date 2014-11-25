describe("RockPaperScissors", function() {
  describe('winning and losing', function() {
    var player1, player2, game

    player1 = new Player();
    player2 = new Player();
    game = new Game(player1, player2);

    describe('rock', function() {
      it('should beat scissors', function() {
        player1.pick("rock");
        player2.pick("scissors");
        expect(game.winner()).toBe(player1);
      });
    });
  });


});
